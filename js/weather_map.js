// javascript

mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.2625, 29.8752], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// jQuery

$(document).ready(function(){
//button listener


    $("button").click(function () {
        event.preventDefault();
        var cityVar = $(".form-control").val();
        var cityString = cityVar.toString();
        console.log(cityVar);

        geocode(cityString, mapBoxKey).then(function (data) {
            console.log(data);
            var latLng = {
                lat: data[1],
                lng: data[0]
            }
            var newMarker = new mapboxgl.Marker().setLngLat(latLng).addTo(map);
            var cityArray = data.reverse();
            map.flyTo({ center: latLng });
            console.log(cityArray);
            console.log(forecast(cityArray));
        });
    });
// map marker

    function gettingCords() {
        var currentCords = marker.getLngLat();
        console.log(currentCords);
        reverseGeocode({lat: currentCords.lat, lng: currentCords.lng}, mapBoxKey).then(function (data){
            console.log(forecast(data));

        })
    }

    var marker = new mapboxgl.Marker({
        color: "#fd8ffa",
        draggable: true
    }).setLngLat([-98.2625, 29.8752])
        .addTo(map);

    marker.on("dragend", () => gettingCords());

// weather

    function forecast(array) {
        console.log(array);
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lat: array[0],
            lon: array[1],
            appid: weatherMapKey,
            units: "imperial",
            exclude: "minutely,hourly,alerts"
        }).done(function (results) {
            console.log(results);
        });
    };
    console.log(forecast());
    console.log("5 thousand years later");
})
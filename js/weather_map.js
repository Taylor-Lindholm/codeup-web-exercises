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

    var cityVar = "Canyon Lake, Tx, USA"

    $('button').click(function(){
        event.preventDefault();
    var cityVar = $('.form-control').val();
    console.log(cityVar);
    })
// map marker

    function gettingCords() {
        var currentCords = marker.getLngLat();
        console.log(currentCords);
    }

    var marker = new mapboxgl.Marker({
        color: "#fd8ffa",
        draggable: true
    }).setLngLat([-98.2625, 29.8752])
        .addTo(map);

    marker.on("dragend", () => gettingCords());


    console.log("5 thousand years later");
})
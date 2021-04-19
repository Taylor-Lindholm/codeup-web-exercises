$(document).ready(function(){
//map
    mapboxgl.accessToken = mapBoxKey;
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.2625, 29.8752], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    function gettingCords() {
        var currentCords = marker.getLngLat();
        console.log(currentCords);
        forecast([currentCords.lat, currentCords.lng]);
    }
    // function gettingSearchCords() {
    //     let searchCords = searchMarker.getLngLat();
    //     forecast([searchCords.lat, searchCords.lng])
    // }

    let marker = new mapboxgl.Marker({
        color: "#fd8ffa",
        draggable: true,
        zoom: 10
    }).setLngLat([-98.2625, 29.8752])
        .addTo(map);

    marker.on("dragend", () => gettingCords());
    // searchMarker.on("dragend", () => gettingSearchCords())
    forecast([29.8752, -98.2625]);

//search listener
    $("button").click(function () {
        event.preventDefault();
        var cityVar = $(".form-control").val();
        var cityString = cityVar.toString();
        console.log(cityVar);
        marker.remove();
        geocode(cityString, mapBoxKey).then(function (data) {
            console.log(data);
            var latLng = {
                lat: data[1],
                lng: data[0]
            };
            let searchMarker = new mapboxgl.Marker({
                color: "#fd8ffa",
                draggable: true
            }).setLngLat(latLng).addTo(map);
            var cityArray = data.reverse();
            map.flyTo({ center: latLng, zoom: 11 });
            console.log(cityArray);
            console.log(forecast(cityArray));

            function gettingSearchCords() {
                let searchCords = searchMarker.getLngLat();
                forecast([searchCords.lat, searchCords.lng])
            };
            searchMarker.on("dragend", () => gettingSearchCords());
        });
    });

// map option listener

    $('.form-check-input').change(function (){
        if (this.checked) {
            $('.map').removeClass('map-hidden');
        } else {
            $('.map').addClass('map-hidden');
        }
    })
//day option listener

    $("#day-int-select").change(function(){
        $(this).click(gettingCords());
    });

// weather

    function forecast(array) {
        console.log(array);
        reverseGeocode({lat: array[0], lng: array[1]}, mapBoxKey).then(function (data){
            console.log(data);
            let locationArray = data.split(",")
            let locState = locationArray[2].split(" ");
            locState.length = 2;
            console.log(locState);
            let locationHTML = `<h3>${locationArray[1]},${locState[1]}</h3>`
            $('.location-box').empty();
            $('.location-box').append(locationHTML);

        })
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lat: array[0],
            lon: array[1],
            appid: weatherMapKey,
            units: "imperial",
            exclude: "minutely,hourly,alerts"
        }).done(function (results) {
            console.log(results);
            let currentWeather = results.current.weather[0].main;
            console.log(currentWeather);
            let currentClass = $('body').attr("class");
            console.log(currentClass);
            switch (currentWeather) {
                case "Clouds":
                    $('body').removeClass(currentClass);
                    $('body').addClass('cloudy');
                    break;
                case "Thunderstorm":
                    $('body').removeClass(currentClass);
                    $('body').addClass('thunderstorm');
                    break;
                case "Drizzle":
                    $('body').removeClass(currentClass);
                    $('body').addClass('cloudy');
                    break;
                case "Snow":
                    $('body').removeClass(currentClass);
                    $('body').addClass('snowy');
                    break;
                case "Clear":
                    $('body').removeClass(currentClass);
                    $('body').addClass('sunny');
                    break;
                case "Rain":
                    $('body').removeClass(currentClass);
                    $('body').addClass('thunderstorm')
            }
            $('.weather-cards').empty();
            let dayInteval = $('#day-int-select').val();
            for( dayIndex = 0; dayIndex <= dayInteval; dayIndex++) {
                let forecastData = results.daily[dayIndex];
                let html =
                `<div class="card card-weather">
                    <div class="card-body">
                        <div class="weather-date-location">
                           <p class="text-gray"> <span class="weather-date">${new Date(forecastData.dt * 1000).toDateString()}</span> </p>
                        </div>
                        <div class="weather-data d-flex">
                            <div class="mr-auto">
                                <p class="display-3">Low ${forecastData.temp.min} °F /High ${forecastData.temp.max} °F</p>
                                <img src="http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png">
                                <p>${forecastData.weather[0].description}</p>
                                <p>${forecastData.humidity}</p>
                                <p>${forecastData.wind_speed}</p>
                                <p>${forecastData.pressure}</p>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>`
                $('.weather-cards').append(html);
            }
        });
    };
    console.log("5 thousand years later");
})
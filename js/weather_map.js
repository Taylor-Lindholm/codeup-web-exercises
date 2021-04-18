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
            let marker = new mapboxgl.Marker().setLngLat(latLng).addTo(map);
            var cityArray = data.reverse();
            map.flyTo({ center: latLng });
            console.log(cityArray);
            console.log(forecast(cityArray));
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

// map marker

    function gettingCords() {
        var currentCords = marker.getLngLat();
        console.log(currentCords);
        forecast([currentCords.lat, currentCords.lng]);
    }

    let marker = new mapboxgl.Marker({
        color: "#fd8ffa",
        draggable: true
    }).setLngLat([-98.2625, 29.8752])
        .addTo(map);

    marker.on("dragend", () => gettingCords());
    forecast([29.8752, -98.2625]);

// weather

    function forecast(array) {
        console.log(array);
        reverseGeocode({lat: array[0], lng: array[1]}, mapBoxKey).then(function (data){
            console.log(data);
            let locationArray = data.split(",")
            let locationHTML = `<h3>Current Location: ${locationArray[1]},${locationArray[2]}</h3>`
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
    //             let html = `<div class="card" style="width: 25%;">
    //     <div class="card-header" id="date">
    //     ${new Date(forecastData.dt * 1000).toDateString()}
    //     </div>
    //     <ul class="list-group list-group-flush">
    //         <li class="list-group-item" class="temp">${forecastData.temp.min}/${forecastData.temp.max}
    //             <img src="http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png">
    //         </li>
    //         <li class="list-group-item" class="description">${forecastData.weather[0].description}</li>
    //         <li class="list-group-item" class="humidity">Humidity: ${forecastData.humidity}</li>
    //         <li class="list-group-item" class="wind">${forecastData.wind_speed}</li>
    //         <li class="list-group-item" class="pressure">${forecastData.pressure}</li>
    //     </ul>
    // </div>`;
                let html =`
                <!--weather card-->
                <div class="card card-weather">
                    <div class="card-body">
                        <div class="weather-date-location">
                            
                            <p class="text-gray"> <span class="weather-date">${new Date(forecastData.dt * 1000).toDateString()}</span> </p>
                        </div>
                        <div class="weather-data d-flex">
                            <div class="mr-auto">
                                <p class="display-3">Low ${forecastData.temp.min} <span class="symbol">°</span>F /</p><p class="display-3">High ${forecastData.temp.max} <span class="symbol">°</span>F</p>
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
                </div>
                <!--weather card ends-->
                           `

                $('.weather-cards').append(html);
            }
        });
    };
    console.log("5 thousand years later");
})
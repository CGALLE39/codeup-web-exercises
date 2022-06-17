"use strict";
const URL = 'https://api.openweathermap.org/data/2.5/onecall';

let weather = {
    apiKey: "04c038b309a20bd6b810fcc58411be70",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall"
            + city
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("Not Found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
        .then((data) => this.displayWeather(data));
},
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage =
        //     "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather(".search-bar".value);



//
// $.get(URL, {
//     APPID: OPEN_WEATHER_KEY,
//     lat: 40.7485452,
//     lon: -73.9879522,
//     units: "imperial"
// }) .done(function(results) {console.log(results)})
// fetch(URL)
// /////////inner html for weekly forecast


$(document).ready(function() {
    $("#submitData").click(function(results) {
       let html = "";
       html += `
       <div class="card" style="width: 18rem;">
        <div class="card-header">
         Featured
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
        <h4> Tempuraure: ${results.temp}</h4>
</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
       `
        });
    });


//
    geocode("San Antonio, US", MAPBOX_API_KEY).then(function (results) {
        return results;
    }).then(function (data) {
        console.log(data)
        $.get(URL, {
            APPID: OPEN_WEATHER_KEY,
            lat: data[1],
            lon: data[0],
            units: "imperial"
        }).done(function (data) {
            console.log(data);
        })
    })

//
// displayWeather: function (data)
//
//
mapboxgl.accessToken = MAPBOX_API_KEY;
const MAP = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});



// geocode(document.getElementById("place"), MAPBOX_API_KEY).then(function (info) {
//     console.log(info)
    const marker = new mapboxgl.Marker()
        .setLngLat([-98.4946, 29.4252])
        .addTo(MAP)
        .setDraggable(true);

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });
    map.addControl(geocoder);

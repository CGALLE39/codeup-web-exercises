"use strict";
const URL = 'https://api.openweathermap.org/data/2.5/onecall';


$.get(URL, {
    APPID: OPEN_WEATHER_KEY,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}) .done(function(results) {console.log(results)})


$("#submitData").click(function() {
    var enterData = $("#place").val();
    geocode(enterData, MAPBOX_API_KEY).then(function (result){
        console.log(result);
        map.setCenter(result);
        marker.setLngLat(result);
        $("#cityName").html("");
    });
});



geocode("San Antonio, US", MAPBOX_API_KEY).then(function(results) {
    return results;
}).then(function(data) {
    console.log(data)
    $.get(URL, {
        APPID: OPEN_WEATHER_KEY,
        lat: data[1],
        lon: data[0],
        units: "imperial"
    }) .done(function(data) {console.log(data);
    })
})


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

    // map.on('load', () => {
    //     map.addSource('single-point', {
    //         type: 'geojson',
    //         data: {
    //             type: 'featureCollection',
    //             features: []
    //         }
    //     });
    //     map.addLayer({
    //         id: 'point',
    //         source: 'single-point',
    //         type: 'circle',
    //         paint: {
    //             'circle-radius': 10,
    //             'circle-color': '#448ee4'
    //         }
    //     });
    //     geocoder.on('result', (event) => {
    //         map.getSource('single-point').setData(event.result.geometry);
    //     });
    // });


///// select city for navbar
function getInfo() {
    const newName= document.getElementById("place");
    const cityName = document.getElementById("cityName")
    cityName.innerHTML = "--"+newName.value+"--"
}

const dateDisplay = document.getElementById("date")
const tempDisplay = document.getElementById("Temp")
const humidDisplay = document.getElementById("hum")
const pressDisplay = document.getElementById("press")

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

getWeatherData()
function getWeatherData () {

}

//
// function weatherData(data) {
//     let {date, clouds, temperature, humidity, pressure} = data.current;
//     currentWeatherItemsE1.innerHTML =
//
//     '<h5 class="Date" id="date">${date}</h5>
//         <p class="description" id="description">${clouds}</p>
//         <p class="temp" id="Temp">${temperature}</p>
//         <p class="humid" id="hum">${humidity}</p>
//         <p class="pressure" id="press">${pressure}</p>'
// }

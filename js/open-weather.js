"use strict";
const URL = 'https://api.openweathermap.org/data/2.5/onecall';

$.get(URL, {
    APPID: OPEN_WEATHER_KEY,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}) .done(function(results) {console.log(results)})


geocode("San Antonio, US", MAPBOX_API_KEY).then(function(results) {
    return results;
}).then(function(data) {
    console.log(data)
    $.get(URL, {
        APPID: OPEN_WEATHER_KEY,
        lat: data[1],
        lon: data[0],
        units: "imperial"
    }) .done(function(results) {console.log(results);
    })
})

var marker = new mapboxgl.Marker();
marker.setLngLat([-98.85907099908773,39.46933743871111]);
marker.addTo(map);
marker.setDraggable(true);

// button//
document.getElementById('btn1')
    .addEventListener('click')

// $("#location").html("Time Zone: " + data.timezone).append(" latitude:" + data.latitude).append(" longitude:" + data.longitude);
// $("#temperature").html("temperature: " + data.daily.data[0].apparentTemperatureHigh);
// $("#pressure").html("pressure: " + data.daily.data[0].pressure);
// $("#windSpeed").html("windSpeed: " + data.daily.data[0].windSpeed);
// $("#humidity").html("humidity: " + data.daily.data[0].humidity);
// $("#summary").html(data.daily.data[0].summary);

fetchWeather: (ev) => {
    let lat = document.getElementById('latitude').value;
    let lon =
}

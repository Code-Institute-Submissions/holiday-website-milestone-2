function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 48.77587653040708,
            lng: 48.77587653040708
        }
    });
} 

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [

    //north american locations
    { lat: 40.7127281, lng: -40.7127281 }, // new york
    { lat: 34.0536909, lng: -118.2427666 }, // los angeles
    { lat: 43.653963, lng: -79.387207 }, //toronto

    //european locations
    { lat: 51.5073219, lng: -0.1276474 }, //london
    { lat: 48.8566969, lng: 2.3514616 }, // paris
    { lat: 40.4167047, lng: -3.7035825 }, // madrid

    // asian locations
    { lat: 35.6828387, lng: 139.7594549 }, //tokyo
    { lat: -8.456018100000001, lng: 115.27038551191185 }, //bali
    { lat: 22.349215549999997, lng: 114.1857978100035}, // hong kong

];

var markers = locations.map (function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
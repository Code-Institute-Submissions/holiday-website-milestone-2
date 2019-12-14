function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 48.77587653040708,
            lng: 48.77587653040708
        }
    });


var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [

    //north american locations
    { lat: 40.7127281, lng: -74.0060152}, // new york
    { lat: 34.0536909, lng: -118.2427666 }, // los angeles
    { lat: 43.653963, lng: -79.387207 }, //toronto

    //european locations
    { lat: 51.5073219, lng: -0.1276474 }, //london
    { lat: 48.8566969, lng: 2.3514616 }, // paris
    { lat: 40.4167047, lng: -3.7035825 }, // madrid

    // asian locations
    { lat: 35.6828387, lng: 139.7594549 }, //tokyo
    { lat: 31.2322735, lng: 121.4691749 }, //shanghai
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



// this is for the onclick event when clicking for the 3 continents 

google.maps.event.addDomListener(document.getElementById('northam'), 'click', function () {

    map.setCenter(new google.maps.LatLng(39.88023492849345, -98.95179748535156));
});

google.maps.event.addDomListener(document.getElementById('europe'), 'click', function () {

    map.setCenter(new google.maps.LatLng(51, 10));
});

google.maps.event.addDomListener(document.getElementById('asia'), 'click', function () {

    map.setCenter(new google.maps.LatLng(29.84987535114661,111.6640090942383));
});


}
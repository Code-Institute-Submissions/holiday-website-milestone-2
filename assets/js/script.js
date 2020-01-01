function initMap() { //initialises map
    var intialise = {
      zoom: 4,
      center: {
        lat: 48.77587653040708, // this is where the map will first center on
        lng: 48.77587653040708
      }
    }
  
    var map = new google.maps.Map(document.getElementById("map"), intialise); // targets the map in destinations.hmtl
  
    var locations = [
  
      //north american locations
      {
        point: {
          lat: 40.7127281,
          lng: -74.0060152
        },
  
      }, // new york
      {
        point: {
          lat: 34.0536909,
          lng: -118.2427666
        },
   
      }, // los angeles
      {
        point: {
          lat: 43.653963,
          lng: -79.387207
        }
      }, //toronto

      //european locations
      {
        point: {
          lat: 51.5073219,
          lng: -0.1276474
        }
      }, //london
      {
        point: {
          lat: 48.8566969,
          lng: 2.3514616
        }
      }, // paris
      {
        point: {
          lat: 40.4167047,
          lng: -3.7035825
        }
      }, // madrid
  
      // asian locations
      {
        point: {
          lat: 35.6828387,
          lng: 139.7594549
        }
      }, //tokyo
      {
        point: {
          lat: 31.2322735,
          lng: 121.4691749
        }
      }, //shanghai
      {
        point: {
          lat: 22.349215549999997,
          lng: 114.1857978100035
        }
      }, // hong kong
    ];
  
    for (var i = 0; i < locations.length; i++) { //allows to cycle through locations so the markers can be added after 
      addMarker(locations[i]);
    }
   
    function addMarker(local) { //adds markers to the map
      var marker = new google.maps.Marker({
        position: local.point,
        map: map,
      });
   
    }
    google.maps.event.addDomListener(document.getElementById('northam'), 'click', function () { // this allows you to click the button above map and center on north america
  
      map.setCenter(new google.maps.LatLng(39.88023492849345, -98.95179748535156));
    });
  
    google.maps.event.addDomListener(document.getElementById('europe'), 'click', function () { // this allows you to click the button above map and center on europe
  
      map.setCenter(new google.maps.LatLng(51, 10));
    });
  
    google.maps.event.addDomListener(document.getElementById('asia'), 'click', function () { // this allows you to click the button above map and center on asia
  
      map.setCenter(new google.maps.LatLng(29.84987535114661, 111.6640090942383));
    });
   
  }
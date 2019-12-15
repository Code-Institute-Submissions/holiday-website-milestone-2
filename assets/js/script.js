function initMap() {
    var intialise = {
        zoom: 4,
        center: {
            lat: 48.77587653040708,
            lng: 48.77587653040708
        } }

        var map = new google.maps.Map(document.getElementById("map"),intialise); 
        
    


    var locations = [

        //north american locations
        { point:{lat: 40.7127281, lng: -74.0060152},
          info: '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
          'sandstone rock formation in the southern part of the '+
          'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
          'south west of the nearest large town, Alice Springs; 450&#160;km '+
          '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
          'features of the Uluru - Kata Tjuta National Park. Uluru is '+
          'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
          'Aboriginal people of the area. It has many springs, waterholes, '+
          'rock caves and ancient paintings. Uluru is listed as a World '+
          'Heritage Site.</p>'+
          '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
          'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
          '(last visited June 22, 2009).</p>'+
          '</div>'+
          '</div>',                        
                
        }, // new york
        { point:{lat: 34.0536909, lng: -118.2427666 },
           
    
    }, // los angeles
        
        { point:{lat: 43.653963, lng: -79.387207 }}, //toronto
    
        //european locations
        { point:{lat: 51.5073219, lng: -0.1276474 }}, //london

        { point:{lat: 48.8566969, lng: 2.3514616 }}, // paris

        { point:{lat: 40.4167047, lng: -3.7035825 }}, // madrid
    
        // asian locations
        { point:{lat: 35.6828387, lng: 139.7594549 }}, //tokyo

        { point:{lat: 31.2322735, lng: 121.4691749 }}, //shanghai

        { point:{lat: 22.349215549999997, lng: 114.1857978100035}}, // hong kong
    
    ];

    for(var i = 0;i <locations.length;i++){
        addMarker(locations[i]);
      }
   

function addMarker(local) {
    var marker = new google.maps.Marker({
        position: local.point,
        map: map,
    });

    if(local.point){
        var infoWindow = new google.maps.InfoWindow({
          content:local.info
        });

        marker.addListener('click', function(){
          infoWindow.open(map, locations);
        });
      }
    }
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


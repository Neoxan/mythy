import GMaps from 'gmaps/gmaps.js';
import { autocomplete } from '../components/autocomplete';
import { autocomplete2 } from '../components/autocomplete2';
import { autocomplete3 } from '../components/autocomplete3';
import { toogleTab } from './bookingManagement';

autocomplete();
autocomplete2();
autocomplete3();

const styles = [
{
  "featureType": "all",
  "elementType": "all",
  "stylers": [
  {
    "visibility": "on"
  }
  ]
},
{
  "featureType": "all",
  "elementType": "labels",
  "stylers": [
  {
    "visibility": "off"
  },
  {
    "saturation": "-100"
  }
  ]
},
{
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "saturation": 36
  },
  {
    "color": "#000000"
  },
  {
    "lightness": 40
  },
  {
    "visibility": "off"
  }
  ]
},
{
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [
  {
    "visibility": "off"
  },
  {
    "color": "#000000"
  },
  {
    "lightness": 16
  }
  ]
},
{
  "featureType": "all",
  "elementType": "labels.icon",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#000000"
  },
  {
    "lightness": 20
  }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [
  {
    "color": "#000000"
  },
  {
    "lightness": 17
  },
  {
    "weight": 1.2
  }
  ]
},
{
  "featureType": "landscape",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#000000"
  },
  {
    "lightness": 20
  }
  ]
},
{
  "featureType": "landscape",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#4d6059"
  }
  ]
},
{
  "featureType": "landscape",
  "elementType": "geometry.stroke",
  "stylers": [
  {
    "color": "#4d6059"
  }
  ]
},
{
  "featureType": "landscape.natural",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#4d6059"
  }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [
  {
    "lightness": 21
  }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#4d6059"
  }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry.stroke",
  "stylers": [
  {
    "color": "#4d6059"
  }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
  {
    "visibility": "on"
  },
  {
    "color": "#7f8d89"
  }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#7f8d89"
  }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#7f8d89"
  },
  {
    "lightness": 17
  }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [
  {
    "color": "#7f8d89"
  },
  {
    "lightness": 29
  },
  {
    "weight": 0.2
  }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#000000"
  },
  {
    "lightness": 18
  }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#7f8d89"
  }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry.stroke",
  "stylers": [
  {
    "color": "#7f8d89"
  }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#000000"
  },
  {
    "lightness": 16
  }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#7f8d89"
  }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry.stroke",
  "stylers": [
  {
    "color": "#7f8d89"
  }
  ]
},
{
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#000000"
  },
  {
    "lightness": 19
  }
  ]
},
{
  "featureType": "water",
  "elementType": "all",
  "stylers": [
  {
    "color": "#2b3638"
  },
  {
    "visibility": "on"
  }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#2b3638"
  },
  {
    "lightness": 17
  }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [
  {
    "color": "#24282b"
  }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry.stroke",
  "stylers": [
  {
    "color": "#24282b"
  }
  ]
},
{
  "featureType": "water",
  "elementType": "labels",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.icon",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
}
];

const mapElement = document.getElementById('map');

function animateCard(card) {
  console.log(card);
  card.classList.toggle("card-active");
  setTimeout(function(){card.classList.toggle("card-active")}, 500);
}

if (mapElement) { // don't try to build a map if there's no div#map to inject in
  const map = new GMaps({ el: '#map', lat: 0, lng: 0 });
  map.addStyle({
    styles: styles,
    mapTypeId: 'map_style'
  });
  map.setStyle('map_style');
  const markers = JSON.parse(mapElement.dataset.markers);
  let i = 0;
  markers.forEach((parameters) => {
    i++;
    map.addMarker({
      lat: parameters.lat,
      lng: parameters.lng,
      label: i.toString(),
      click: function(i) {
        animateCard(document.querySelectorAll(".card")[parseInt(i.label) - 1])
      }
    });
  })
  if (markers.length === 0) {
    map.setZoom(2);
  } else if (markers.length === 1) {
    map.setCenter(markers[0].lat, markers[0].lng);
    map.setZoom(14);
  } else {
    map.fitLatLngBounds(markers);
  }
}



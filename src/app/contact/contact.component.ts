import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);
    map.panTo(new L.LatLng(11.7058906, 75.5333635));



    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    const myIcon = L.icon({
      iconUrl: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/map-marker-icon.png',
      iconSize: [40, 40],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });
    L.marker([11.706751, 75.536667], {icon: myIcon}).addTo(map)
      .bindPopup('Af de Mahe')
      .openPopup();
  }


}

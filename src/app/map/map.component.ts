import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;
  @Input() countries:any[] = [];
  public map2:any;
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
    //this.initMap();
  }

 public mapChanged(event:any){
    this.map2 = event;
   console.log(this.map2);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [34.8282, -70.5795],
      zoom: 2
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.countries.forEach(element => {
      var circle = L.circle([element.countryInfo.lat, element.countryInfo.long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: element.cases / 5,
      }).addTo(this.map);       
    });

  }
}

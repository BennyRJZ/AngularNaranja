import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { StopService } from 'app/services/stop.service';
import { MarkerService } from 'app/services/marker.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})


export class MapsComponent implements OnInit {
  public array = [];
  public arrayOfPlaces = [];
  public arrayOfStops = [];
  public arrayOfMarkers = [];


  constructor(private placeService: PlaceService, private stopService: StopService, private markerService: MarkerService) { }
  deletePlace(id) {
    if (confirm('Borrar punto de interes')){
      this.placeService.deletePlace(id).subscribe(data => {
        this.fetch();
      });
    }
  }
  deleteStop(id) {
    if (confirm('Borrar parada')){
      this.stopService.deleteStop(id).subscribe(data => {
        this.fetch();
      });
    }
  }
  deleteMarker(id) {
    if (confirm('Borrar marcador')){
      this.markerService.deleteMarker(id).subscribe(data => {
        this.gMarker();
      });
    }
  }
  addPlace(id, name, lng, lat, place_type_id, description, narrative_id){
  this.placeService.addPlace(id, name, lng, lat, place_type_id, description, narrative_id).subscribe(data => {
    this.fetch();
  });
  }
  addStop(id, name, lng, lat, tour_id, description){
    this.stopService.addStop(id, name, lng, lat, tour_id, description).subscribe(data => {
      this.fetch();
    });
    }
  addMarker(id, tour_id, lat, lng, description, name){
      this.markerService.addMarker(id, tour_id, lat, lng, description, name).subscribe(data => {
        this.gMarker();
      });
      }
  fetch() {
    this.placeService.getPlace()
    .subscribe(res => {
      this.arrayOfPlaces = res;
      console.log(res);
    });
  }
  obt(){
    this.stopService.getStop()
    .subscribe(res => {
      this.arrayOfStops = res;
      console.log(res);
    });
  }
  gMarker() {
    this.markerService.getMarkers()
    .subscribe(res => {
      this.arrayOfMarkers = res;
      console.log(res);
    });
  }
  ngOnInit() {
    this.fetch();
    this.obt();
    this.gMarker();

  }

}

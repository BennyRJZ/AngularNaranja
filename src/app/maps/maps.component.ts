import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { StopService } from 'app/services/stop.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})


export class MapsComponent implements OnInit {
  public array = [];
  public arrayOfPlaces = [];
  public arrayOfStops = [];


  constructor(private placeService: PlaceService, private stopService: StopService) { }
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
  ngOnInit() {
    this.fetch();
    this.obt();
  }

}

import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { StopService } from 'app/services/stop.service';
import { MarkerService } from 'app/services/marker.service';
import { NgForm } from '@angular/forms';

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
  public currentPlace = [];
  public currentStop = [];
  public currentMarker = [];


  constructor(private placeService: PlaceService, private stopService: StopService, private markerService: MarkerService) { }
  // Metodos para borrar Punto de Interes, Parada y Marcador.
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
        this.obt();
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
  // Metodos para añadir Punto de Interés, Parada y Marcador.
  addPlace(name, lng, lat, place_type_id, description, narrative_id){
  this.placeService.addPlace(name, lng, lat, place_type_id, description, narrative_id).subscribe(data => {
    this.fetch();
  });
  }
  addStop(name, lng, lat, tour_id, description){
    this.stopService.addStop(name, lng, lat, tour_id, description).subscribe(data => {
      this.obt();
    });
    }
  addMarker(tour_id, lat, lng, description, name){
      this.markerService.addMarker(tour_id, lat, lng, description, name).subscribe(data => {
        this.gMarker();
      });
      }
  // Metodos para borrar Punto de Interes, Parada y Marcador.
  updatePlace(id, name, lng, lat, place_type_id, description, narrative_id){
    this.placeService.updatePlace(id, name, lng, lat, place_type_id, description, narrative_id).subscribe(data => {
      this.fetch();
    }, error => {alert('Error, verifica tus datos')});
    }
  updateStop(id, name, lng, lat, tour_id, description){
    this.stopService.updateStop(id, name, lng, lat, tour_id, description).subscribe(data => {
    this.obt();
    }, error => {alert('Error, verifica tus datos')});
    }
  updateMarker(id, name, tour_id, lat, lng, description){
    this.markerService.updateMarker(id, name, tour_id, lat, lng, description).subscribe(data => {
    this.gMarker();
    }, error => {alert('Error, verifica tus datos')});
    }
  // Métodos para obtener Puntos de Interés, Paradas y Marcadores.
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

  // Obtiene los puntos de interés cuando comienza a cargar la página. 
  ngOnInit() {
    this.fetch();
    this.obt();
    this.gMarker();

  }

}

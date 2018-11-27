import { Component, OnInit } from '@angular/core';
import { MuralService } from '../services/mural.service';
import { BusService } from '../services/bus.service';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],

})


export class TypographyComponent implements OnInit {
  public array = [];
  public arrayOfmurals = [];
  public arrayOfBuses = [];
  public arrayOfTours = [];
  public currentBus = {};
  public currentMural = {};
  public currentTour = {};


  constructor(private muralService: MuralService, private busService: BusService, private tourService: TourService) { }
  // Obtiene los autobuses y murales al cargar la pagina. 
  ngOnInit() {
    this.fetch();
    this.obtB();
    this.obtT();
  }
  // Metodos para eliminar un mural o autobus seleeccionando su id
  deleteMural(id) {
    if (confirm('Borrar registro de mural?')){
      this.muralService.deleteMural(id).subscribe(data => {
        this.fetch();
      });
    }
  }
  deleteBus(id) {
    if (confirm('Borrar el autobus?')){
      this.busService.deleteBus(id).subscribe(data => {
        this.obtB();
      });
    }
  }
  deleteTour(id) {
    if (confirm('Borrar el Tour?')){
      this.tourService.deleteTour(id).subscribe(data => {
        this.obtT();
      });
    }
  }
  // Metodos para añadir un nuevo mural o un nuevo autobus
  addMural(title, name, last_name, description){
  this.muralService.addMural(title, name, last_name, description).subscribe(data => {
    this.fetch();
  });
  }
  addBus(capacity, tour_id, mural_id){
    this.busService.addBus(capacity, tour_id, mural_id).subscribe(data => {
    this.obtB();
    });
    }
  addTour(name, image_id, description){
    this.tourService.addTour(name, image_id, description).subscribe(data => {
    this.obtT();
    });
    }
    // Metodos para actualizar un mural o autobus seleeccionando su id
  updateBus(id, capacity, tour_id, mural_id){
      this.busService.updateBus(id, capacity, tour_id, mural_id).subscribe(data => {
      this.obtB();
      }, error => {alert('Error, verifica tus datos')});
      }
  updateMural(id, title, name, last_name, description){
        this.muralService.updateMural(id, title, name, last_name, description).subscribe(data => {
        this.fetch();
        }, error => {alert('Error, verifica tus datos')});
        }
  updateTour(id, name, image_id, description){
        this.tourService.updateTour(id, name, image_id, description).subscribe(data => {
        this.obtT();
        }, error => {alert('Error, verifica tus datos')});
        }
  // Metodos para obtener las tablas mural y autobus. 
  fetch() {
    this.muralService.getMural()
    .subscribe(res => {
      this.arrayOfmurals = res;
      console.log(res);
    });
  }
  obtB() {
    this.busService.getBus()
    .subscribe(res => {
      console.log(res);
      this.arrayOfBuses = res;
    });
  }
  obtT() {
    this.tourService.getTour()
    .subscribe(res => {
      console.log(res);
      this.arrayOfTours = res;
    });
  }


}


import { Component, OnInit } from '@angular/core';
import { MuralService } from '../services/mural.service';
import {NgForm} from '@angular/forms';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],

})


export class TypographyComponent implements OnInit {
  public array = [];
  public arrayOfmurals = [];
  public arrayOfBuses = [];

  constructor(private muralService: MuralService, private busService: BusService) { }

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
  addMural(title, name, last_name, description){
  this.muralService.addMural(title, name, last_name, description).subscribe(data => {
    this.fetch();
  });
  }
  addBus(id, capacity, tour_id, mural_id){
    this.busService.addBus(id, capacity, tour_id, mural_id).subscribe(data => {
      this.obtB();
    });
    }
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
      this.arrayOfBuses = res;
      console.log(res);
    });
  }
  ngOnInit() {
    this.fetch();
    this.obtB();
  }

}


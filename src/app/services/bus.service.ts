import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../interfaces/bus';
import { Observable } from 'rxjs/observable';


@Injectable()
export class BusService {

  private _id: number;

  constructor(private http: HttpClient) { }

  getBus(): Observable<Bus[]> {

    return this.http.get<Bus[]>('https://api-estrella-roja.appspot.com' + '/bus');
  }

  deleteBus(id: number): Observable<Bus> {
    return this.http.delete<Bus>('https://api-estrella-roja.appspot.com' + '/bus' + '/' + id);
  }

  getIDBus(id): Observable<Bus> {
    return this.http.get<Bus>('https://api-estrella-roja.appspot.com' + '/bus' + '/' + id);
  }

  addBus(id, capacity, tour_id, mural_id): Observable<Bus> {
    const obj = {
      id: id,
      capacity: capacity,
      tour_id: tour_id,
      mural_id: mural_id
    };
    return this.http.post<Bus>('https://api-estrella-roja.appspot.com' + '/bus' , obj);
  }

  updateStop(id, capacity, tour_id, mural_id): Observable<Bus> {
    const obj = {
      id: id,
      capacity: capacity,
      tour_id: tour_id,
      mural_id: mural_id
    };
    return this.http.put<Bus>('https://api-estrella-roja.appspot.com' + '/bus' + '/' + id, obj);
  }



}

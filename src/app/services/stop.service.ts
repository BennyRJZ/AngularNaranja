import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stop } from '../interfaces/Stop';
import { Observable } from 'rxjs/observable';


@Injectable()
export class StopService {

  private _id: number;

  constructor(private http: HttpClient) { }

  getStop(): Observable<Stop[]> {

    return this.http.get<Stop[]>('https://api-estrella-roja.appspot.com' + '/stop');
  }

  deleteStop(id: number): Observable<Stop> {
    return this.http.delete<Stop>('https://api-estrella-roja.appspot.com' + '/stop' + '/' + id);
  }

  getIDStop(id): Observable<Stop> {
    return this.http.get<Stop>('https://api-estrella-roja.appspot.com' + '/stop' + '/' + id);
  }

  addStop(id, name, lng, lat, tour_id, description): Observable<Stop> {
    const obj = {
      id: id,
      name: name,
      lng: lng,
      lat: lat,
      tour_id: tour_id,
      description: description
    };
    return this.http.post<Stop>('https://api-estrella-roja.appspot.com' + '/stop' , obj);
  }

  updateStop(id, name, lng, lat, tour_id, description): Observable<Stop> {
    const obj = {
      id: id,
      name: name,
      lng: lng,
      lat: lat,
      tour_id: tour_id,
      description: description
    };
    return this.http.put<Stop>('https://api-estrella-roja.appspot.com' + '/stop' + '/' + id, obj);
  }



}

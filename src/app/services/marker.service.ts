import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marker } from '../interfaces/Marker';
import { Observable } from 'rxjs/observable';


@Injectable()
export class MarkerService {

  private _id: number;

  constructor(private http: HttpClient) { }

  getMarkers(): Observable<Marker[]> {

    return this.http.get<Marker[]>('https://api-estrella-roja.appspot.com/markers');
  }

  deleteMarker(id: number): Observable<Marker> {
    return this.http.delete<Marker>('https://api-estrella-roja.appspot.com' + '/markers' + '/' + id);
  }

  getIDMarker(id): Observable<Marker> {
    return this.http.get<Marker>('https://api-estrella-roja.appspot.com' + '/markers' + '/' + id);
  }

  addMarker(id, tour_id, lat, lng, description, name): Observable<Marker> {
    const obj = {
      id: id,
      tour_id: tour_id,
      lat: lat,
      lng: lng,
      description: description,
      name: name
    };
    return this.http.post<Marker>('https://api-estrella-roja.appspot.com' + '/markers' , obj);
  }

  updatePlace(id, tour_id, lat, lng, description, name): Observable<Marker> {
    const obj = {
      id: id,
      tour_id: tour_id,
      lat: lat,
      lng: lng,
      description: description,
      name: name
    };
    return this.http.put<Marker>('https://api-estrella-roja.appspot.com' + '/marker' + '/' + id, obj);
  }



}

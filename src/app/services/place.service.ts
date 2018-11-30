import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Places } from '../interfaces/Place';
import { Observable } from 'rxjs/observable';


@Injectable()
export class PlaceService {

  private _id: number;

  constructor(private http: HttpClient) { }

  getPlace(): Observable<Places[]> {

    return this.http.get<Places[]>('https://api-estrella-roja.appspot.com/place?limit=1000');
  }

  deletePlace(id: number): Observable<Places> {
    return this.http.delete<Places>('https://api-estrella-roja.appspot.com' + '/place' + '/' + id);
  }

  getIDPlace(id): Observable<Places> {
    return this.http.get<Places>('https://api-estrella-roja.appspot.com' + '/place' + '/' + id);
  }

  addPlace(name, lng, lat, place_type_id, description, narrative_id): Observable<Places> {
    const obj = {
      name: name,
      lng: lng,
      lat: lat,
      place_type_id: place_type_id,
      description: description,
      narrative_id: narrative_id
    };
    return this.http.post<Places>('https://api-estrella-roja.appspot.com' + '/place', obj);
  }

  updatePlace(id, name, lng, lat, place_type_id, description, narrative_id): Observable<Places> {
    const obj = {
      id: id,
      name: name,
      lng: lng,
      lat: lat,
      place_type_id: place_type_id,
      description: description,
      narrative_id: narrative_id
    };
    return this.http.put<Places>('https://api-estrella-roja.appspot.com' + '/place' + '/' + id, obj);
  }



}

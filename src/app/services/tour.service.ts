import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tour } from '../interfaces/Tour';
import { Observable } from 'rxjs/observable';

@Injectable()
export class TourService {

  private _id: number;

  constructor(private http: HttpClient) { }

  getTour(): Observable<Tour[]> {

    return this.http.get<Tour[]>('https://api-estrella-roja.appspot.com' + '/tour');
  }

  deleteTour(id: number): Observable<Tour> {
    return this.http.delete<Tour>('https://api-estrella-roja.appspot.com' + '/tour' + '/' + id);
  }

  getIDTour(id): Observable<Tour> {
    return this.http.get<Tour>('https://api-estrella-roja.appspot.com' + '/tour' + '/' + id);
  }

  addTour(name, image_id, description): Observable<Tour> {
    const obj = {
      name: name,
      image_id: image_id,
      description: description
    };
    return this.http.post<Tour>('https://api-estrella-roja.appspot.com' + '/tour' , obj);
  }

  updateTour(id, name, image_id, description): Observable<Tour> {
    const obj = {
      id: id,
      name: name,
      image_id: image_id,
      description: description
    };
    return this.http.put<Tour>('https://api-estrella-roja.appspot.com' + '/tour' + '/' + id, obj);
  }



}

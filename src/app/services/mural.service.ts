import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mural } from '../interfaces/Mural';
import { Observable } from 'rxjs/observable';


@Injectable()
export class MuralService {

  private _id: number;

  constructor(private http: HttpClient) { }

  getMural(): Observable<Mural[]> {

    return this.http.get<Mural[]>('https://api-estrella-roja.appspot.com' + '/mural');
  }

  deleteMural(id: number): Observable<Mural> {
    return this.http.delete<Mural>('https://api-estrella-roja.appspot.com' + '/mural' + '/' + id);
  }

  getIDMural(id): Observable<Mural> {
    return this.http.get<Mural>('https://api-estrella-roja.appspot.com' + '/mural' + '/' + id);
  }

  addMural(title, name, last_name, description): Observable<Mural> {
    const obj = {
      title: title,
      name: name,
      last_name: last_name,
      description: description
    };
    return this.http.post<Mural>('https://api-estrella-roja.appspot.com' + '/mural' , obj);
  }

  updateMural(id, title, name, last_name, description): Observable<Mural> {
    const obj = {
      id: id,
      title: title,
      name: name,
      last_name: last_name,
      description: description
    };
    return this.http.put<Mural>('https://api-estrella-roja.appspot.com' + '/mural' + '/' + id, obj);
  }



}

import { Image } from '../interfaces/image';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ImageService {

  private _id: number;
  constructor(private http: HttpClient) { }

  getImage(): Observable<Image[]> {

    return this.http.get<Image[]>('https://api-estrella-roja.appspot.com/image');
  }
  deleteImage(id: number): Observable<Image> {
    return this.http.delete<Image>('https://api-estrella-roja.appspot.com' + '/image' + '/' + id);
  }
  addImage(image_url, description): Observable<Image> {
    const obj = {
      image_url: image_url,
      description: description
    };
    return this.http.post<Image>('https://api-estrella-roja.appspot.com' + '/markers' , obj);
  }
  updateImage(id, image_url, description): Observable<Image> {
    const obj = {
      id: id,
      image_url: image_url,
      description: description
    };
    return this.http.put<Image>('https://api-estrella-roja.appspot.com' + '/image' + '/' + id, obj);
  }
}

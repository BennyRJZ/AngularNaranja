import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../interfaces/Purchase';
import { Observable } from 'rxjs/observable';

@Injectable()
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>('https://api-estrella-roja.appspot.com' + '/purchases');
  }

  deletePurchase(id: number): Observable<Purchase> {
    return this.http.delete<Purchase>('https://api-estrella-roja.appspot.com' + '/purchases' + '/' + id);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // this behaviorsubject helps us to share the data between the products component & the nav-bar component
public Data = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }
// this is the service where we use to get data from API
  getproducts(): Observable<any>{
    return this._HttpClient.get('https://dummyjson.com/products');
  }
}

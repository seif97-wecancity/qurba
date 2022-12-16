import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { User } from './../shared/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  signin(data : object):Observable<User>{
    return this._HttpClient.post('https://dummyjson.com/auth/login' ,data)
  }
}

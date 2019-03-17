import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

//Allow inject things in Angular serives
@Injectable({
  //tells which module is providing the service
  //root: app.module
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  
constructor(private http:HttpClient) { }

login(model:any){
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response:any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token',user.token);
      }
    }) )
}
}

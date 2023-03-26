import { Injectable } from '@angular/core';
import { Login } from '../login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class loginService {
  URL = 'http://localhost:8080/auth';
  
    constructor(private http: HttpClient) { }
  
    public postLogin(): Observable<Login>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'key': 'x-api-key',
        'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
  
    })
      return this.http.post<Login>(this.URL+'/',{ username: "felipe", password: "admin1234"});
    }
  }
  
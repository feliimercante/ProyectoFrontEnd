import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class educacionService {
  URL = 'http://localhost:8080/auth';
  
    constructor(private http: HttpClient) { }
  
    public geteducacion(): Observable<educacion>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'key': 'x-api-key',
        'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
  
    })
      return this.http.get<educacion>(this.URL+'/?id=1',{ headers: headers});
    }
  }
  
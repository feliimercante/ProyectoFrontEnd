import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class educacionService {
  URL = 'http://localhost:8080/educacion';
  
    constructor(private http: HttpClient) { }
  
    public geteducacionList(): Observable<educacion[]>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'key': 'x-api-key',
        'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
  
    })
      return this.http.get<educacion[]>(this.URL+'/list',{ headers: headers});
    }
  }
  
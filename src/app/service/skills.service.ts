import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'http://localhost:8080/skill';
  
    constructor(private http: HttpClient) { }
  
    public getSkills(): Observable<skills[]>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'key': 'x-api-key',
        'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
  
    })
      return this.http.get<skills[]>(this.URL+'/list',{ headers: headers});
    }
  }
  
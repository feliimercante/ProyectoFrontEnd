import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'http://localhost:8080/auth/?username=45543734,password=Arg@1234';
  
    constructor(private http: HttpClient) { }
  
    public postSkills(): Observable<skills>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'key': 'x-api-key',
        'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
  
    })
      return this.http.get<skills>(this.URL+'/',{ headers: headers});
    }
  }
  
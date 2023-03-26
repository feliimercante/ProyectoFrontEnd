import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class experienciaService {
  expURL = 'http://localhost:8080/expLaboral/'


  constructor(private httpClient: HttpClient) { }
  public getExperienciaList(): Observable<experiencia[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'key': 'x-api-key',
      'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',

  })
    return this.httpClient.get<experiencia[]>(this.expURL + 'list');
  }
 
}

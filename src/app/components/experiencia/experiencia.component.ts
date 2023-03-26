import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia';
import { experienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: experiencia[] = [];


  constructor(public experienciaService: experienciaService) { }
  ngOnInit(): void {
    this.experienciaService.getExperienciaList().subscribe(data => {this.expe = data;})
  }
}
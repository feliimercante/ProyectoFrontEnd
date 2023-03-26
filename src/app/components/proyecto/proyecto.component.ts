import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto';
import { proyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoList: proyecto[] = []

  constructor(public proyectoService:proyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getproyecto().subscribe(data => {this.proyectoList = data;})
  }

}

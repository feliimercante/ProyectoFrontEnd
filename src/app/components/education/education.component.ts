import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion';
import { educacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList : educacion[] = []

  constructor(public educacionService: educacionService) { }

  ngOnInit(): void {
    this.educacionService.geteducacionList().subscribe((data: educacion[]) => {this.educationList = data})
  }

}

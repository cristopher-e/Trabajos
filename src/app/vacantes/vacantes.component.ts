import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacante } from '../trabajos';
import { TrabajosService } from "../trabajos.service"

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  constructor(private TrabajosService: TrabajosService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  vacanteModel = new Vacante("", "", "","","");

  onSubmit() {
    this.TrabajosService.addVacante(this.vacanteModel).subscribe(() => {
    });
  }

}

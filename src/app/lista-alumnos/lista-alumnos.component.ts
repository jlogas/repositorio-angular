import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../servicios/mi-servicio.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit{
  constructor(private servicio: MiServicioService ){}
  // inyeccion de dependencias
  ngOnInit(): void {
    console.log('del componente lista',this.servicio.obtenerAlumnos());
  }
 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-estudiantes',
  templateUrl: './app-estudiantes.component.html',
  styleUrls: ['./app-estudiantes.component.css']
})
export class AppEstudiantesComponent implements OnInit{
 public nombre: string | undefined;
 public nombre1= " ";
 public apellido: string | undefined;
 public estudiantes =[ 'juan','jose','emanuel']

 ngOnInit(): void{
  // this.nombre = 'estudiantes';
 }

 cambiar1(){
  this.estudiantes[0]=this.nombre1;
 }
eliminar1(){
  this.estudiantes[0]='';
}
 

 verDatos(){
  console.log('nombre: ', this.nombre);
  console.log('Aoellido: ', this.apellido);
  
 }

 cargardatos(){
  this.nombre ="leo"
  this.apellido="messi"
 }
}

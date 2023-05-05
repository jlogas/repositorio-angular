import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from '../vista/vista.component';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ListaClasesComponent } from '../lista-clases/lista-clases.component';
import { VistaModule } from '../vista/vista.module';

const ruta: Routes =[
  {path: '', component: VistaComponent, children:[
    {path: 'uno', component: ListaAlumnosComponent},
    {path: 'dos', component: ListaClasesComponent}
  ]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,VistaModule,RouterModule.forChild(ruta)],
  exports:[RouterModule],
})
export class VistaRoutingModule { }

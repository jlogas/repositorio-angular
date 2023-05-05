import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClasesComponent } from '../lista-clases/lista-clases.component';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { VistaComponent } from './vista.component';
import { VistaRoutingModule } from '../vista-routing/vista-routing.module';
import { RouterModule, Routes } from '@angular/router';

const ruta: Routes =[
  {path: '', component: VistaComponent, children:[
    {path: 'uno', component: ListaAlumnosComponent},
    {path: 'dos', component: ListaClasesComponent}
  ]}
];

@NgModule({
  declarations: [
    ListaClasesComponent,
    ListaAlumnosComponent,
    VistaComponent,
  
  ],
  imports: [
    CommonModule,VistaRoutingModule,RouterModule.forChild(ruta)
  ],
  exports:[RouterModule]
})
export class VistaModule { }

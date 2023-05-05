import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from '../vista/vista.component';

const rutas:Routes =[
  {path : 'mi-vista', component: VistaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
  ], 
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }

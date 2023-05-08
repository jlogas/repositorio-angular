import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './formularios/formularios.component';
import { VistaComponent } from './vista/vista.component';
import { ListaClasesComponent } from './lista-clases/lista-clases.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';


const rutas: Routes=[      
  {path: 'uno', component: FormulariosComponent},
  {path: 'dos', component: ListaClasesComponent},
  {path: '', component: VistaComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

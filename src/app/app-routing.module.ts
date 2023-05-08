import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './formularios/formularios.component';
import { VistaComponent } from './vista/vista.component';
import { ListaClasesComponent } from './lista-clases/lista-clases.component';


const rutas: Routes=[      
  {path: 'uno', component: FormulariosComponent},
  {path: 'dos', component: ListaClasesComponent},
  {path: 'vista', component: VistaComponent},

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

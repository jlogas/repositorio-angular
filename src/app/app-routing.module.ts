import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './formularios/formularios.component';
import { VistaComponent } from './vista/vista.component';
import { ListaClasesComponent } from './lista-clases/lista-clases.component';


const rutas: Routes=[      
  {path: '', component: VistaComponent},
  {path: 'dashboard', loadChildren:() => import('./dashboard/dashboard.module').then(x => x.DashboardModule)},
  
 
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

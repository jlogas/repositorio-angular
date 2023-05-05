import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppEstudiantesComponent } from './app-estudiantes/app-estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosComponent } from './formularios/formularios.component';
import { MaterialModule } from './material/material.module';
import { MiCustomPipe } from './formularios/mi-custom.pipe';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListaClasesComponent } from './lista-clases/lista-clases.component';
import { VistaComponent } from './vista/vista.component';

export const APIURL =new InjectionToken('APIURL');

const rutas: Routes=[
  {path: 'uno', component: FormulariosComponent},
  {path: 'dos', component: ListaClasesComponent},
  {path: 'vista', component: VistaComponent},
  {path: 'vista/ :parametro', component: VistaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    AppEstudiantesComponent,
    MiDirectivaDirective,
    FormulariosComponent,
    MiCustomPipe,
    ListaAlumnosComponent,
    ObservablesComponent,
    ListaClasesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),

  ],
  providers: [
    {
      provide: APIURL,
      useValue:'https://rickandmortyapi.com/',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

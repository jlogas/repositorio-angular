import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppEstudiantesComponent } from './app-estudiantes/app-estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosComponent } from './formularios/formularios.component';
import { MaterialModule } from './material/material.module';
import { MiCustomPipe } from './formularios/mi-custom.pipe';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { ListaClasesComponent } from './lista-clases/lista-clases.component';
import { VistaComponent } from './vista/vista.component';
import { AppRoutingModule } from './app-routing.module';

export const APIURL =new InjectionToken('APIURL');



@NgModule({
  declarations: [ 
    AppComponent,
    AppEstudiantesComponent, 
    FormulariosComponent,
    MiCustomPipe,
    ListaAlumnosComponent,
    ObservablesComponent,
    ListaClasesComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    
    

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

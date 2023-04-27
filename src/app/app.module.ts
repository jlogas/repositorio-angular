import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    AppEstudiantesComponent,
    MiDirectivaDirective,
    FormulariosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { VistaComponent } from './vista/vista.component';
import { AppRoutingModule } from './app-routing.module';

export const APIURL =new InjectionToken('APIURL');



@NgModule({
  declarations: [ 
    AppComponent,
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

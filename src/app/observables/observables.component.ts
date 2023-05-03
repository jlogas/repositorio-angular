import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MiServicioService } from '../servicios/mi-servicio.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit{
  public fecha = new Date()
  public fehcaObservable: Observable<Date>;
  constructor(private servicio:MiServicioService){

  }
  
  ngOnInit(): void {
  this.fehcaObservable = this.servicio.getFecha();
  }   

}


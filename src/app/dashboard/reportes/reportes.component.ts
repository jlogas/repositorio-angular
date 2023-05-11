import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit{
    public listaClases:any=[];
  constructor(private servicio:MiServicioService ){

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.servicio.get('https://645c2033a8f9e4d6e77b9e4a.mockapi.io/api/clases')
    .subscribe(respuesta =>{
      console.log(respuesta);
      this.listaClases = respuesta;
      
    })
  }

}

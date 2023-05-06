import { Component, OnInit } from '@angular/core';
import { Materias } from '../models/materias.model';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css']
})
export class ListaClasesComponent implements OnInit{

  materias: Materias[] =[
    {id: 134,
      materia: 'calculo',
      profesor: 'pedro morales'
    },
    {
      id: 2323,
      materia:'sosiales',
      profesor:'Gilma quintero'
    },
    {
      id: 3234,
      materia: 'fisica',
      profesor: 'Michael plazas' 
    },
  ];

  displayedColumns = ['id','materia','profesor'];
  
  ngOnInit(): void {
  }

}
  
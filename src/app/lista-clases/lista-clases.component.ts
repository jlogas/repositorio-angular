import { Component, OnInit } from '@angular/core';
import { Materias } from '../models/materias.model';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css']
})
export class ListaClasesComponent implements OnInit{

  materias: Materias [] =[
    {id: 1,
      materia: 'calculo',
      profesor: 'pedro morales'
    },
    {
      id: 2,
      materia: 'sosiales',
      profesor: 'Gilma quintero'
    },
    {
      id: 3,
      materia: 'fisica',
      profesor: 'Michael'
    },
  ];

  Columns=['id','materia','profesor'];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
  
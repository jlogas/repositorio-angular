import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student.model';


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  students: Student[]=[
    { id: 1,
      nombre: 'juan',
      apellido: 'lopez',
      email: 'juanjlopez'
    },
    { id: 2,
      nombre: 'daniel',
      apellido: 'perez',
      email: 'danielperez'
    },
  ];

  displayedColumns = ['id','nombre','apellido','email','edit','delete'];

   public formularioActividad!: FormGroup;
   public formulario!: FormGroup;
   arrayEstu:any[] =[];
   estu:any ={};
   public miPropiedad ="curso angular";
   constructor(private fb: FormBuilder){
    
   }
  ngOnInit(): void {
    this.formularioActividad = this.fb.group({
      id: ['',[Validators.minLength(2)]],
      nombre: ['',[Validators.minLength(4),Validators.required]],
      apellido:['',[Validators.minLength(4),Validators.required]],
      email:['',[Validators.required,Validators.email]],
    })
    
   }
   

  submitActividad(): any{
   console.log(this.formularioActividad.valid);
   
    this.estu = this.formularioActividad.value;
    this.students.push(this.estu)
   
    console.log(this.estu.usuario);
    console.log(this.students)
    

  }
  
}



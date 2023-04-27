import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
   public formularioActividad!: FormGroup;
   public formulario!: FormGroup;
   arrayEstu:any[] =[];
   public usuario!: string;
   public email!: string;
   public edad!: number;
   estu:any ={};

   constructor(private fb: FormBuilder){
    
   }
  ngOnInit(): void {
    this.formularioActividad = this.fb.group({
      usuario: ['',[Validators.minLength(4),Validators.required]],
      email:['',[Validators.required,Validators.email]],
      edad:['', [Validators.required]],
    })
    
   }
  submitActividad(): any{
   console.log(this.formularioActividad.valid);

    this.estu = this.formularioActividad.value;
    this.arrayEstu.push(this.estu)

  }
  
}



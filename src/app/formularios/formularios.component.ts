import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

class Hero{
  name!: string;
  alterego!:string;
  constructor(name: string, alterego: string){
    this.name = name;
    this.alterego = alterego;
  }
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
   public formularioprincipal!: FormGroup;
   public formularioSecundario!: FormGroup;
   public formularioActividad!: FormGroup;
   // heroe es lo que se vincula con el formulario
   public heroe = new Hero('batman','bruno dias');
   constructor(private fb: FormBuilder){
    
   }
  ngOnInit(): void {
    this.formularioActividad = this.fb.group({
      usuario: ['',[Validators.minLength(4),Validators.required]],
      email:['',[Validators.required,Validators.email]],
      edad:['', [Validators.required]],
    }

    )
    this.formularioprincipal = this.fb.group({
      nombre: [' ',[Validators.required, Validators.minLength(2)]],
      edad: [],
      genero:[],
    });
    this.formularioSecundario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      genero: new FormControl(),
    });
  }
  submit(): void{
    console.log(this.formularioprincipal.value);
    console.log(this.formularioprincipal.valid);
  }
  submit2(): void{
    console.log(this.heroe);
  }
  submitActividad(): void{
    console.log(this.formularioActividad.value);
    console.log(this.formularioActividad.valid);
    
  }

}

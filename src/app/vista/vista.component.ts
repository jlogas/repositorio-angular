import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  form: FormGroup;
  loading = false;
 constructor(private fb: FormBuilder,private _snackBar: MatSnackBar){
  this.form = this.fb.group({
    usuario:['', Validators.required],
    password:['', Validators.required],
  })
 }
  ngOnInit(): void {
   
  }

  ingresar(){
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if (usuario == 'juan'&& password =='1234'){
        this.espera();
    }else{
      this.error();
      this.form.reset;
    }
    
  }

  error(){
    this._snackBar.open('usuario o clave son invalidos','',{
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
    espera(){
      this.loading= true;
      setTimeout(( )=> {
        this.loading = false;
      }, 1500)
    }
}

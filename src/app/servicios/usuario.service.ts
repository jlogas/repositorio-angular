import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: "jjuan", nombre: "juan jose", apellido: "lopez", email:"juanjlopez@gmail.com"},
    {usuario: "jema", nombre: "julio emanuel", apellido: "venegas", email:"juliovene@gmail.com"},
    {usuario: "sofigale", nombre: "sofia", apellido: "galeano", email:"sofiagale@gmail.com"},
    {usuario: "aesteban", nombre: "andres esteban", apellido: "corzo", email:"andrescorzo@gmail.com"},
  
  ];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }
  
  eliminaraUsario(index: number){
    this.listaUsuarios.splice(index,1);
  }
}

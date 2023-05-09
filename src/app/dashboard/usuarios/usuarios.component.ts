import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios';



const listaUsuarios: Usuario[] = [
  {usuario: "jjuan", nombre: "juan jose", apellido: "lopez", email:"juanjlopez@gmail.com"},
  {usuario: "jema", nombre: "julio emanuel", apellido: "venegas", email:"juliovene@gmail.com"},
  {usuario: "sofigale", nombre: "sofia", apellido: "galeano", email:"sofiagale@gmail.com"},
  {usuario: "aesteban", nombre: "andres esteban", apellido: "corzo", email:"andrescorzo@gmail.com"},

];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'email','acciones'];
  dataSource = listaUsuarios;
}

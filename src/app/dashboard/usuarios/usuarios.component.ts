import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuarios';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  listaUsuarios: Usuario[] = [
    {usuario: "jjuan", nombre: "juan jose", apellido: "lopez", email:"juanjlopez@gmail.com"},
    {usuario: "jema", nombre: "julio emanuel", apellido: "venegas", email:"juliovene@gmail.com"},
    {usuario: "sofigale", nombre: "sofia", apellido: "galeano", email:"sofiagale@gmail.com"},
    {usuario: "aesteban", nombre: "andres esteban", apellido: "corzo", email:"andrescorzo@gmail.com"},
  
  ];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'email','acciones'];
  dataSource = new MatTableDataSource(this.listaUsuarios);



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

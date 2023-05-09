import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/servicios/usuario.service';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent  implements OnInit{

  listUusarios: Usuario[]= [];


  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'email','acciones'];
  dataSource : MatTableDataSource<any>;

constructor( private _usuarioService: UsuarioService){

}
  ngOnInit(): void {
    this.cargarUsuarior()
  }
  cargarUsuarior(){
    this.listUusarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUusarios)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

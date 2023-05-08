import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/servicios/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  menu: Menu[];
  constructor(private _menuservice: MenuService){

  }
  ngOnInit(): void {
    this.cargarMenu
  }
  cargarMenu(){
    this._menuservice.getMenu().subscribe(data => {
      console.log(data);
      this.menu = data;
    })
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { APIURL } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit{
  title = 'coder';

  constructor(
     ){}
  ngOnInit(): void {
  }
}

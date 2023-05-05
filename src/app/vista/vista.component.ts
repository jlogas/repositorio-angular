import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
 constructor(
  private activeRouter: ActivatedRoute){

 }
  ngOnInit(): void {
    this.activeRouter.params.subscribe(console.log);
  }
}

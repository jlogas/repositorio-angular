import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

 
  constructor(private http: HttpClient) {
    
   }
   
   public get(url:string){
    return this.http.get(url)
   }


  

  //RXJS
  
  
 
  
  }


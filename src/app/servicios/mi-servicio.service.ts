import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, of, Subject } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  public usuarios$: Observable<any[]>;
  public usuarios: Subject<any[]>
  constructor(private http: HttpClient) {
    this.usuarios = new Subject()
    this.usuarios$ = this.usuarios.asObservable();
   }

  public obtenerAlumnos(): Student[]{
    return[{
      id: 1,
      nombre: 'juan',
      apellido: 'lopez',
      email: 'juanjlopez'
    }]
  }

  //RXJS
  public getAlumnos(): Observable<Student[]>{
    return of([
      { id: 1,
        nombre: 'juan',
        apellido: 'lopez',
        email: 'juanjlopez'
      },
      { id: 2,
        nombre: 'daniel',
        apellido: 'perez',
        email: 'danielperez'
      },
    ])
  }
  public getFecha(): Observable<Date>{
    return interval(1000).pipe(map(()=> new Date))
  }
 
  
  }


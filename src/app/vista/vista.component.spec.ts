import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComponent } from './vista.component';

describe('VistaComponent', () => {
  let component: VistaComponent;
  let fixture: ComponentFixture<VistaComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario invalido',()=>{
    fixture = TestBed.createComponent(VistaComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() 

    const form = app.form;
    const usuario = app.form.controls['usuario']
    const password = app.form.controls['password']
    usuario.setValue('juan')
    password.setValue('1234') 
    expect(form.invalid).toBeTrue();



  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEstudiantesComponent } from './app-estudiantes.component';

describe('AppEstudiantesComponent', () => {
  let component: AppEstudiantesComponent;
  let fixture: ComponentFixture<AppEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

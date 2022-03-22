import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProyectosComponent } from './form-proyectos.component';

describe('FormProyectosComponent', () => {
  let component: FormProyectosComponent;
  let fixture: ComponentFixture<FormProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEmpleadosComponent } from './mostrar-empleados.component';

describe('MostrarEmpleadosComponent', () => {
  let component: MostrarEmpleadosComponent;
  let fixture: ComponentFixture<MostrarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

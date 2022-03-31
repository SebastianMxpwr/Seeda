import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirEmpleadoComponent } from './anadir-empleado.component';

describe('AnadirEmpleadoComponent', () => {
  let component: AnadirEmpleadoComponent;
  let fixture: ComponentFixture<AnadirEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

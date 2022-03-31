import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTareasComponent } from './mostrar-tareas.component';

describe('MostrarTareasComponent', () => {
  let component: MostrarTareasComponent;
  let fixture: ComponentFixture<MostrarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

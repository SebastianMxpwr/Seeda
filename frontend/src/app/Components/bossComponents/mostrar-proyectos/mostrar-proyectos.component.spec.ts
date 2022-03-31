import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProyectosComponent } from './mostrar-proyectos.component';

describe('MostrarProyectosComponent', () => {
  let component: MostrarProyectosComponent;
  let fixture: ComponentFixture<MostrarProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

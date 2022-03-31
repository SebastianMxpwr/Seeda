import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWorkerComponent } from './navbar-worker.component';

describe('NavbarWorkerComponent', () => {
  let component: NavbarWorkerComponent;
  let fixture: ComponentFixture<NavbarWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

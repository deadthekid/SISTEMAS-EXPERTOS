import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetallesTemaComponent } from './admin-detalles-tema.component';

describe('AdminDetallesTemaComponent', () => {
  let component: AdminDetallesTemaComponent;
  let fixture: ComponentFixture<AdminDetallesTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetallesTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetallesTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

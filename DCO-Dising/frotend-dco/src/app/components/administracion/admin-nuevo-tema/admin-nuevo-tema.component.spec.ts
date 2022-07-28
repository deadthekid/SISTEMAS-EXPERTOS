import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNuevoTemaComponent } from './admin-nuevo-tema.component';

describe('AdminNuevoTemaComponent', () => {
  let component: AdminNuevoTemaComponent;
  let fixture: ComponentFixture<AdminNuevoTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNuevoTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNuevoTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

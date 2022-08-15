import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarTemaComponent } from './admin-editar-tema.component';

describe('AdminEditarTemaComponent', () => {
  let component: AdminEditarTemaComponent;
  let fixture: ComponentFixture<AdminEditarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditarTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

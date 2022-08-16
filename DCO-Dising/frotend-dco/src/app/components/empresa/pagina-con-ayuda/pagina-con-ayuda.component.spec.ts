import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConAyudaComponent } from './pagina-con-ayuda.component';

describe('PaginaConAyudaComponent', () => {
  let component: PaginaConAyudaComponent;
  let fixture: ComponentFixture<PaginaConAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaConAyudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaConAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

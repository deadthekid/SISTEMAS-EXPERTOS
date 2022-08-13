import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaginaComponent } from './detalle-pagina.component';

describe('DetallePaginaComponent', () => {
  let component: DetallePaginaComponent;
  let fixture: ComponentFixture<DetallePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

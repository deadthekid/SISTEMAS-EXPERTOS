import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDetallesComponent } from './galeria-detalles.component';

describe('GaleriaDetallesComponent', () => {
  let component: GaleriaDetallesComponent;
  let fixture: ComponentFixture<GaleriaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaSeleccionComponent } from './plantilla-seleccion.component';

describe('PlantillaSeleccionComponent', () => {
  let component: PlantillaSeleccionComponent;
  let fixture: ComponentFixture<PlantillaSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaSeleccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSinAyudaComponent } from './pagina-sin-ayuda.component';

describe('PaginaSinAyudaComponent', () => {
  let component: PaginaSinAyudaComponent;
  let fixture: ComponentFixture<PaginaSinAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaSinAyudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSinAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

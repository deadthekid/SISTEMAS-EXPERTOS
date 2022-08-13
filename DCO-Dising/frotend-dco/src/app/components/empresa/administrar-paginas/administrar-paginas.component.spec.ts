import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPaginasComponent } from './administrar-paginas.component';

describe('AdministrarPaginasComponent', () => {
  let component: AdministrarPaginasComponent;
  let fixture: ComponentFixture<AdministrarPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarPaginasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

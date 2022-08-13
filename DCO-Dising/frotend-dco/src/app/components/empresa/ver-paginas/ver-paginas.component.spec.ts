import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPaginasComponent } from './ver-paginas.component';

describe('VerPaginasComponent', () => {
  let component: VerPaginasComponent;
  let fixture: ComponentFixture<VerPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPaginasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

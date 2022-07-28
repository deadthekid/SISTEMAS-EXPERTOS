import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosArchivosComponent } from './otros-archivos.component';

describe('OtrosArchivosComponent', () => {
  let component: OtrosArchivosComponent;
  let fixture: ComponentFixture<OtrosArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosArchivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesRevisadasComponent } from './solicitudes-revisadas.component';

describe('SolicitudesRevisadasComponent', () => {
  let component: SolicitudesRevisadasComponent;
  let fixture: ComponentFixture<SolicitudesRevisadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudesRevisadasComponent]
    });
    fixture = TestBed.createComponent(SolicitudesRevisadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

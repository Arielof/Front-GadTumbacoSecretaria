import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesFormularioComponent } from './lista-solicitudes-formulario.component';

describe('ListaSolicitudesFormularioComponent', () => {
  let component: ListaSolicitudesFormularioComponent;
  let fixture: ComponentFixture<ListaSolicitudesFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSolicitudesFormularioComponent]
    });
    fixture = TestBed.createComponent(ListaSolicitudesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

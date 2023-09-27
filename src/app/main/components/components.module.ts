import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { ListaSolicitudesFormularioComponent } from './lista-solicitudes-formulario/lista-solicitudes-formulario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { SolicitudesRevisadasComponent } from './solicitudes-revisadas/solicitudes-revisadas.component';

@NgModule({
  declarations: [
    ListaSolicitudesComponent,
    ListaSolicitudesFormularioComponent,
    ListaUsuariosComponent,
    SolicitudesRevisadasComponent    
  ],  
  exports:[
    ListaSolicitudesComponent,
    ListaSolicitudesFormularioComponent,
    ListaUsuariosComponent,
    SolicitudesRevisadasComponent
  ],
  imports: [
    CommonModule    
  ]
})
export class ComponentsModule { }

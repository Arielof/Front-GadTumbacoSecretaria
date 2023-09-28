import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { ListaSolicitudesFormularioComponent } from './lista-solicitudes-formulario/lista-solicitudes-formulario.component';
import { SolicitudesRevisadasComponent } from './solicitudes-revisadas/solicitudes-revisadas.component';
import { PrimengModule } from 'src/app/primeng/prime.module';
import { UsuarioComponent } from './lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    ListaSolicitudesComponent,
    ListaSolicitudesFormularioComponent,
    UsuarioComponent,
    SolicitudesRevisadasComponent    
  ],  
  exports:[
    ListaSolicitudesComponent,
    ListaSolicitudesFormularioComponent,
    UsuarioComponent,
    SolicitudesRevisadasComponent
  ],
  imports: [
    CommonModule,
    PrimengModule  
  ]
})
export class ComponentsModule { }

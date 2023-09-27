import { ListaUsuariosComponent } from './main/components/lista-usuarios/lista-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSolicitudesComponent } from './main/components/lista-solicitudes/lista-solicitudes.component';
import { ListaSolicitudesFormularioComponent } from './main/components/lista-solicitudes-formulario/lista-solicitudes-formulario.component';
import { SolicitudesRevisadasComponent } from './main/components/solicitudes-revisadas/solicitudes-revisadas.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'listasolicitudes', component: ListaSolicitudesComponent },
  { path: 'respondersolicitud', component: ListaSolicitudesFormularioComponent },
  { path: 'listausuarios', component: ListaUsuariosComponent },
  { path: 'solicitudesrevisadas', component: SolicitudesRevisadasComponent },
  { path: '', redirectTo: 'listasolicitudes', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

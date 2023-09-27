import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-solicitudes-formulario',
  templateUrl: './lista-solicitudes-formulario.component.html',
  styleUrls: ['./lista-solicitudes-formulario.component.css']
})
export class ListaSolicitudesFormularioComponent {  

  handleSubmit(event: Event) {
    event.preventDefault();
    Swal.fire({
      title: 'Quieres guardas los cambios?',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Cambios registrados exitosamente!', '', 'success').then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/';
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no Guardados', '', 'info')
      }
    })
  }

  cancelar() {
    Swal.fire({
      icon: 'info',
      title: 'Solicitud cancelada',
      text: 'Usuario su solicitud ha sido cancelada de manera exitosa',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/';
      }
    });
  }
}
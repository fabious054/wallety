import { useContext } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from '../contexts/usercontext';

function alert(status, message){

    Swal.fire({
        position: "top-end",
        icon: status === 200 ? "success" : "error",
        title: message,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'small-swal-popup'  ,
            icon: 'small-swal-icon',    // Classe para o tamanho do ícone
            title: 'small-swal-title'   // Classe para o tamanho do texto
          }
      });
      
}

export {alert};
import {Injectable} from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastQueue: string[] = [];
  private isShowingToast = false;

  constructor() {
  }

  showToast(icon: 'success' | 'error', message: string) {
    this.toastQueue.push(message);

    // Si no se está mostrando un Toast actualmente, mostrar el siguiente de la cola
    if (!this.isShowingToast) {
      this.isShowingToast = true;
      this.showNextToast(icon);
    }
  }

  private showNextToast(icon: 'success' | 'error') {
    if (this.toastQueue.length > 0) {
      const message = this.toastQueue.shift();

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      });

      Toast.fire({
        icon,
        title: message
      }).then(() => {
        // Una vez que se cierra el Toast actual, mostrar el siguiente si existe en la cola
        this.isShowingToast = false;
        this.showNextToast(icon);
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor() {}

  // Método para obtener el estado del cargador como Observable
  getLoadingStatus(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  // Otros métodos para mostrar y ocultar el cargador
  showLoader() {
    this.isLoading.next(true);
  }

  hideLoader() {
    this.isLoading.next(false);
  }
}

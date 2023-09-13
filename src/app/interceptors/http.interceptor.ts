import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ToastService} from 'src/services/toast/toast.service';
import { LoaderService } from 'src/services/loader/loader.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private toastService$: ToastService,
    private loaderService$: LoaderService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      this.loaderService$.showLoader();
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderService$.hideLoader();
          this.toastService$.showToast('success', event.body.message); // Maneja la respuesta exitosa
        }
      }),
      catchError((error) => {
        console.error('La petición falló', error);
        this.toastService$.showToast('error', error);  // Maneja los errores
        return throwError(error); // Propaga el error para que el componente que hizo la petición también lo maneje
      })
    );
  }
}

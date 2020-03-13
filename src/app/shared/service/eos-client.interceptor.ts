import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';

@Injectable()
export class EosClientInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }
    const started = Date.now();
    let ok: string;
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'succeeded' : '',
        (error: HttpErrorResponse) => ok = 'failed'
      ),
      finalize(() => {
        let elapsed = Date.now() - started;
        let tiempoRespuesta = `${elapsed} ms`;
        if (elapsed > 1000) {
          elapsed = elapsed / 1000;
          tiempoRespuesta = `${elapsed}s`;
          if (elapsed > 60) {
            elapsed = elapsed / 60;
            // let tiempoRespuesta = `${elapsed} min`;
          }
        }
        const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${tiempoRespuesta}.`;
        console.info(msg);
      })
    );
  }
}

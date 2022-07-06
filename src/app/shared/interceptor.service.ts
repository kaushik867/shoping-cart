import { Injectable } from '@angular/core';
import { LoadingService } from './loader/loading.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private loaderScv: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderScv.loading.next(true);

    return next.handle(req).pipe(
      finalize(
        () => {
          this.loaderScv.loading.next(false);
        }
      )
    )
  }
}

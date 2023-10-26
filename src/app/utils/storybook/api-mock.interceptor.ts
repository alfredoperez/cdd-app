import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiMock } from './api-mock.models';

@Injectable()
export class ApiMockInterceptor<T> implements HttpInterceptor {
  constructor(private mockApis: Array<ApiMock<T>>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const mockApi = this.findMockApi(request);
    if (mockApi) {
      return of(mockApi.response);
    }
    return next.handle(request);
  }

  private findMockApi(request: HttpRequest<any>): ApiMock<T> | undefined {
    return this.mockApis.find((mockApi) =>
      this.isSameRequest(mockApi.request, request)
    );
  }

  private isSameRequest(
    request: HttpRequest<unknown>,
    request2: HttpRequest<any>
  ) {
    return request.method === request2.method && request.url === request2.url;
  }
}

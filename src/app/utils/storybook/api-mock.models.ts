import { HttpRequest, HttpResponse } from '@angular/common/http';

export interface ApiMock<T> {
  request: HttpRequest<T>;
  response: HttpResponse<T>;
}

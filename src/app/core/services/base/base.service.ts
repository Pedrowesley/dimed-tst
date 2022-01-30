import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, retryWhen, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  headers: HttpHeaders;
  url: string;

  constructor(private readonly http: HttpClient) {
    this.headers = new HttpHeaders();
    this.url = 'http://www.poatransporte.com.br';
  }

  _get<T>(uri: string) {
    return this._pipe(this.http.get<T>(`${this.url}${uri}`));
  }

  _patch<T>(uri: string, model: any) {
    return this._pipe(
      this.http.patch<T>(`${this.url}${uri}`, model, {
        headers: this.headers,
      })
    );
  }

  _post<T>(uri: string, model: any) {
    return this._pipe(
      this.http.post<T>(`${this.url}${uri}`, model, {
        headers: this.headers,
      })
    );
  }

  _delete<T>(uri: string) {
    return this._pipe(
      this.http.delete<T>(`${this.url}${uri}`, {
        headers: this.headers,
      })
    );
  }

  _pipe<T>(obs: Observable<T>) {
    return obs.pipe(
      retryWhen((errors: any) =>
        errors.pipe(
          delay(2000),
          scan((count: number) => {
            if (count >= 3) {
              throw errors;
            } else {
              count++;
            }
            return count;
          }, 0)
        )
      )
    );
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public base = environment.api;
  constructor(private httpClient: HttpClient) { }

  public login<T>(body: any): Observable<any> {
    const url = this.base + environment.auth.login;
    const requestBody: any = body || JSON.stringify('');
    console.log(requestBody);
    return this.httpClient.post<T>(url, requestBody, {observe: 'response'}).pipe(map(console.log));
  }
}

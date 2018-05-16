import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import * as moment from 'moment/moment';
import {Token} from './token';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    const grantType = 'password';
    var body = new URLSearchParams();
    body.set('username', userName);
    body.set('password', password);
    body.set('grant_type', grantType);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<Token>('http://testjwtclientid:XY7kmzoNzl100@localhost:8080/oauth/token', body.toString(), options)
      .do(res => this.setSession(res))
      .shareReplay();
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}

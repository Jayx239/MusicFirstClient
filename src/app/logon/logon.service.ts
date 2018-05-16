import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LogonService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  submitLogon(userName: string, password: string) {
    return this.authService.login(userName, password);
  }



}

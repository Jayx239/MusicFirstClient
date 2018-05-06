import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogonService {

  logonUrl = 'http://localhost:8080' + '/logon';

  constructor(private http: HttpClient) { }

  submitLogon(formData) {
    return this.http.post(this.logonUrl + '/clientSubmit', formData);
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  logonUrl = 'http://localhost:8080' + '/register';

  constructor(private http: HttpClient) { }

  submitRegister(formData) {
    return this.http.post(this.logonUrl + '/clientSubmit', formData);
  }

}

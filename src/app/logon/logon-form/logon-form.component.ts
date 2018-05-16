import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {LogonService} from '../logon.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-logon-form',
  templateUrl: './logon-form.component.html',
  styleUrls: ['./logon-form.component.css'],
  providers: [LogonService, AuthService]
})
export class LogonFormComponent implements OnInit {
  logonForm;
  userName;
  password;
  grantType;

  userNameMinSize = 2;
  userPasswordMinSize = 6;

  constructor(private logonService: LogonService) { }

  ngOnInit() {
    this.logonForm = new FormGroup({
      'username' : new FormControl(this.userName, [
        Validators.required,
        Validators.minLength(this.userNameMinSize)
      ]),
      'password' : new FormControl(this.password, [
        Validators.required,
        Validators.minLength(this.userPasswordMinSize)
      ]),
      'grant_type' : new FormControl(this.grantType)
    });
  }


  onSubmit(logonForm: NgForm) {
    console.log(logonForm.value);
    console.log(logonForm.valid);
    console.log(logonForm);
    logonForm.value.grant_type = 'password';
    if (logonForm.valid) {
      this.logonService.submitLogon(logonForm.value.username, logonForm.value.password).subscribe(data => {
        console.log(data);
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { LogonService } from '../logon.service';

@Component({
  selector: 'app-logon-form',
  templateUrl: './logon-form.component.html',
  styleUrls: ['./logon-form.component.css'],
  providers: [LogonService]
})
export class LogonFormComponent implements OnInit {
  logonForm;
  userName;
  password;

  userNameMinSize = 2;
  userPasswordMinSize = 6;

  constructor(private logonService: LogonService) { }

  ngOnInit() {
    this.logonForm = new FormGroup({
      'userName' : new FormControl(this.userName, [
        Validators.required,
        Validators.minLength(this.userNameMinSize)
      ]),
      'password' : new FormControl(this.password, [
        Validators.required,
        Validators.minLength(this.userPasswordMinSize)
      ])
    });
  }


  onSubmit(logonForm: NgForm) {
    console.log(logonForm.value);
    console.log(logonForm.valid);
    console.log(logonForm);
    if (logonForm.valid) {
      this.logonService.submitLogon(logonForm.value).subscribe(data => {
        console.log(data);
      });
    }
  }
}

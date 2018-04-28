import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-logon-form',
  templateUrl: './logon-form.component.html',
  styleUrls: ['./logon-form.component.css']
})
export class LogonFormComponent implements OnInit {
  logonForm;
  userName;
  password;

  userNameMinSize = 2;
  userPasswordMinSize = 6;

  constructor() { }

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
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { RegisterService } from "../register.service";
import {LogonService} from "../../logon/logon.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [RegisterService]
})
export class RegisterFormComponent implements OnInit {


  model = this;
  registerFormModel;

  firstName;
  middleName;
  lastName;
  birthDateDay;
  birthDateMonth;
  birthDateYear;

  gender;
  email;

  userName;
  password;

  userNameMinSize = 1;
  userPasswordMinSize = 6;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerFormModel = new FormGroup({
      'firstName' : new FormControl(this.firstName, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'lastName' : new FormControl(this.lastName, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'birthDay' : new FormControl(this.birthDateDay, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'birthMonth' : new FormControl(this.birthDateMonth, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'birthYear' : new FormControl(this.birthDateYear, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email' : new FormControl(this.email, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'userName' : new FormControl(this.userName, [
        Validators.required,
        Validators.minLength(this.userNameMinSize)
      ]),
      'password' : new FormControl(this.password, [
        Validators.required,
        Validators.minLength(this.userPasswordMinSize)
      ]),
    });
  }

  onSubmit(registerForm: NgForm) {
    console.log(registerForm.value);
    console.log(registerForm.valid);
    console.log(registerForm);
    if (registerForm.valid) {
      this.registerService.submitRegister(registerForm.value).subscribe(data => {
        console.log(data);
      });
    }
  }


}

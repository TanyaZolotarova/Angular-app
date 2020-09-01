import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-at-form',
  templateUrl: './login-at-form.component.html',
  styleUrls: ['./login-at-form.component.css']
})
export class LoginAtFormComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  hide = true;
  ReactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {}


  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.initForm();
  }
  // tslint:disable-next-line:typedef
  initForm(){
    this.ReactiveForm = this.fb.group({
      email: [null],
      password: [null]
    });
  }
}


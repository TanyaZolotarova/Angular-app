import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  hide = true;
  ReactiveForm: FormGroup;

  constructor(private fb: FormBuilder){}


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

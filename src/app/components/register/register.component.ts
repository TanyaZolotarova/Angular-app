import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public hide = true;

  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });


  constructor(
    private apiService: ApiService
  ) {
  }


  getErrorMessageEmail(): string {
    if (this.registerForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.controls.email.hasError ? 'Not a valid email' : '';
  }
    getErrorMessagePassword(): string {
    if (this.registerForm.controls.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerForm.controls.password.hasError ? 'Not a valid password' : '';
  }

  ngOnInit(): void {
  }

  public register(): void {
    const body = this.registerForm.getRawValue();
    this.apiService.createUser(body).subscribe(console.log);
  }
}

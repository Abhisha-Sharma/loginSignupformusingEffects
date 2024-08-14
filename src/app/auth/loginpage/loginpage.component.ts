import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from './model/login.model';
import { loginStart } from './store/login.action';
import { LoginState } from './store/login.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private store: Store<LoginState>) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('hi there');

      const loginUser: LoginUser = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.store.dispatch(loginStart({ loginuser: loginUser }));
    }
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}

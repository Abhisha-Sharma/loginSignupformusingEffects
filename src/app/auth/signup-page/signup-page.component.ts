import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { signupStart } from './store/signup.actions';
import { SignupServiceService } from './service/signup-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private store: Store,
    private signupService: SignupServiceService
  ) {}
  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordsMatch }
    );
  }
  passwordsMatch(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    console.log(password, confirmPassword);

    return password === confirmPassword?null
      // ? { notMatching: null }
      : { notMatching: true };
  }
  onSignupSubmit() {
    if (this.signupForm.valid) {
      const { email, password, confirmPassword } = this.signupForm.value;
      const user = {
        email,
        password,
        confirmPassword,
        id: this.generateId(),
      };
      this.store.dispatch(signupStart({ user }));
    }
    this.signupForm.reset();
  }
  generateId(): number {
    return Math.floor(100 + Math.random() * 900);
  }
}

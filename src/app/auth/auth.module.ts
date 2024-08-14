import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { signupReducer } from '../auth/signup-page/store/signup.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SignupEffects } from './signup-page/store/signup.effects';
import { LoginEffects } from './loginpage/store/login.effects';
import { loginReducer } from './loginpage/store/login.reducer';

@NgModule({
  declarations: [LoginpageComponent, SignupPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    StoreModule.forFeature('signup', signupReducer),
    EffectsModule.forFeature([SignupEffects, LoginEffects]),
    StoreModule.forFeature('login', loginReducer),
  ],
})
export class AuthModule {}

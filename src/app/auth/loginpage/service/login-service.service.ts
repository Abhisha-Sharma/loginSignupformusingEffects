import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupServiceService } from '../../signup-page/service/signup-service.service';
import { User } from '../../model/signup.model';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private baseUrl!: string;
  constructor(
    private http: HttpClient,
    private signupService: SignupServiceService
  ) {
    this.baseUrl = this.signupService.getApiUrl();
  }
  login(loginuser: LoginUser): Observable<LoginUser[]> {
    return this.http.get<LoginUser[]>(
      `${this.baseUrl}/signup?email=${loginuser.email}&password=${loginuser.password}`
    );
  }
}

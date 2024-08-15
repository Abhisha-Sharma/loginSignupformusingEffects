import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/signup.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupServiceService {
  private apiUrl = `http://localhost:3000`;
  constructor(private http: HttpClient) {}
  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/signup`, user);
  }
  getApiUrl():string{
    return this.apiUrl;
  }
}

import { IUserSignup } from './../model/user-signup.mode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly url = 'http://localhost:3000/api/dir/';
  private isAuth = new Subject<boolean>();
  constructor(private http: HttpClient) {}
  signup(user: IUserSignup) {
    return this.http.post(`${this.url}user/signup`, user);
  }
  signin(user: { email: string; password: string }) {
    return this.http.post(`${this.url}user/signin`, user);
  }
  updateAuth(state: boolean) {
    this.isAuth.next(state);
  }
  setupSuccessAuth(token: string) {
    localStorage.setItem('token', token);
    this.updateAuth(true);
  }
  isAuthSaved() {
    const isAuth = localStorage.getItem('token') ? true : false;
    return isAuth;
  }
  logout() {
    this.updateAuth(false);
    localStorage.removeItem('token');
  }
  asynAuth() {
    return this.isAuth.asObservable();
  }
}

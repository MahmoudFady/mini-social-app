import { IUserSignup } from './../../model/user-signup.mode';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../shared-style/shared.css', './signup.component.css'],
})
export class SignupComponent {
  loading = false;
  signupErrMsg: string | null = null;
  constructor(private authService: AuthService) {}
  ngOnInit() {}
  handelSignup(form: NgForm) {
    if (form.invalid) return;
    this.loading = true;
    const user: IUserSignup = { ...form.value };
    this.authService.signup(user).subscribe({
      next: (response: any) => {
        this.loading = false;
        if (!response.token) {
          this.signupErrMsg = response.message;
          return;
        }
        this.signupErrMsg = null;
        this.authService.setupSuccessAuth(response.token);
      },
      error: (err) => {
        console.log(err);
        this.signupErrMsg = err.message;
        this.loading = false;
      },
    });
  }
}

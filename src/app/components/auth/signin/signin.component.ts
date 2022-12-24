import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../shared-style/shared.css', './signin.component.css'],
})
export class SigninComponent {
  signinErrMsg: string | null = null;
  loading = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {}
  handelSignin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.loading = true;
    const user = form.value as { email: string; password: string };
    this.authService.signin(user).subscribe({
      next: (response) => {
        console.log(response);
        this.loading = false;
        this.signinErrMsg = null;
      },
      error: (err) => {
        const status = err.status;
        this.signinErrMsg =
          status === 500
            ? 'sorry something go wrong'
            : 'wrong email or password';
        this.loading = false;
      },
    });
  }
}

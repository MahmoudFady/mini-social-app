import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAuth = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.isAuth = this.authService.isAuthSaved();
    this.authService.asynAuth().subscribe({
      next: (state) => {
        this.isAuth = state;
      },
    });
  }
  handleLogout() {
    this.authService.logout();
  }
}

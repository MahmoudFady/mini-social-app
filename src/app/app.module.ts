import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './components/posts/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './components/404/page-404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    PostsComponent,
    PostComponent,
    Page404Component,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
})
export class AppModule {}

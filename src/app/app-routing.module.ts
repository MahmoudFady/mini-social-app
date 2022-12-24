import { Page404Component } from './components/404/page-404.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/timeline',
    pathMatch: 'full',
  },
  {
    path: 'timeline',
    component: PostsComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  { path: 'page-404', component: Page404Component },
  { path: '**', redirectTo: '/page-404' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

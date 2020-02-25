import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './core/pages/page404/page404.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

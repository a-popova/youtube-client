import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { Page404Component } from './core/pages/page404/page404.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/search-results', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

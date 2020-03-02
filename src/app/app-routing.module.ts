import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './core/pages/page404/page404.component';
import { AuthGuard, LoadGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'results', /*canLoad: [LoadGuard], canActivate: [AuthGuard],*/
  loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: '', /*canLoad: [LoadGuard], canActivate: [AuthGuard],*/
  redirectTo: '/results', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, LoadGuard]
})
export class AppRoutingModule { }

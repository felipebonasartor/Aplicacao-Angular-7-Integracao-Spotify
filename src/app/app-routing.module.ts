import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyLoginComponent } from './spotify/spotify-login/spotify-login.component';
import { SpotifyUserComponent } from './spotify/spotify-user/spotify-user.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: SpotifyLoginComponent },
  { path: 'login', component: SpotifyLoginComponent },
  { path: 'user', canActivate: [AuthGuard], component: SpotifyUserComponent },
  { path: '**', component: SpotifyLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

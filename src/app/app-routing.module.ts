import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyLoginComponent } from './spotify/spotify-login/spotify-login.component';
import { SpotifyUserComponent } from './spotify/spotify-user/spotify-user.component';
import { AuthGuard } from './services/auth.guard';
import { SpotifyCallbackTokenComponent } from './spotify/spotify-callback-token/spotify-callback-token.component';

const routes: Routes = [
  { path: '', component: SpotifyLoginComponent },
  { path: 'login', component: SpotifyLoginComponent },
  { path: 'user', component: SpotifyUserComponent },
  { path: 'callback', canActivate: [AuthGuard], component: SpotifyCallbackTokenComponent },
  { path: '**', component: SpotifyLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

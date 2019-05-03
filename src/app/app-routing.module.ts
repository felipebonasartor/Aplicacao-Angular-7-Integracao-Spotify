import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

import { SpotifyUserPlaylistComponent } from './components/spotify-user-playlist/spotify-user-playlist.component';
import { SpotifyCallbackTokenComponent } from './components/spotify-callback-token/spotify-callback-token.component';
import { SpotifyLoginComponent } from './components/spotify-login/spotify-login.component';
import { SpotifyUserComponent } from './components/spotify-user/spotify-user.component';

const routes: Routes = [
  { path: '', component: SpotifyLoginComponent },
  { path: 'login', component: SpotifyLoginComponent },
  { path: 'callback', canActivate: [AuthGuard], component: SpotifyCallbackTokenComponent },
  { path: 'user', component: SpotifyUserComponent },
  { path: 'user/playlist', component: SpotifyUserPlaylistComponent },
  { path: '**', component: SpotifyLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

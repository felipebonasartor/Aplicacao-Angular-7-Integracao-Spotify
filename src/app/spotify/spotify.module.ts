import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpotifyUserComponent } from './spotify-user/spotify-user.component';
import { SpotifyCallbackTokenComponent } from './spotify-callback-token/spotify-callback-token.component';
import { SpotifyService } from '../services/spotify-service';
import { SpotifyUserPlaylistComponent } from './spotify-user-playlist/spotify-user-playlist.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    declarations: [SpotifyLoginComponent, SpotifyUserComponent, SpotifyCallbackTokenComponent, SpotifyUserPlaylistComponent],
    imports: [HttpClientModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule, AngularFontAwesomeModule],
    providers: [SpotifyService],
    exports: [SpotifyLoginComponent]    
})
export class SpotifyModule { }
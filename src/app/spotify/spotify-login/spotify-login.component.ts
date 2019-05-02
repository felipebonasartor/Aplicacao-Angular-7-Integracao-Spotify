import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.sass']
})
export class SpotifyLoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  loginSpotify() {
    window.location.href = this.getUrl();
  }

  getUrl() {
    // let scopes = 'user-read-private user-read-email';
    // let client_id = '203d056607a24c6caee142fc67866230';
    // let redirect_uri = 'https://felipebonasartor.github.io/spotify-app-integration/user';
    // let response_type = 'token';
    // let state = 123;

    // return `https://accounts.spotify.com/authorize?
    // client_id=${client_id} 
    // &redirect_uri=${encodeURIComponent(redirect_uri)} 
    // &scope=${encodeURIComponent(scopes)} 
    // &response_type=${response_type}
    // &state=${state};`

    return 'https://accounts.spotify.com/authorize?client_id=203d056607a24c6caee142fc67866230&redirect_uri=https://felipebonasartor.github.io/spotify-app-integration/callback&scope=user-read-private%20user-read-email&response_type=token&state=123';
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SpotifyService } from '../../services/spotify-service/spotify-service';

@Component({
  selector: 'spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.sass']
})
export class SpotifyLoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  loginSpotify() {
    window.location.href = this.spotifyService.getTokenUrl();    
  }
}

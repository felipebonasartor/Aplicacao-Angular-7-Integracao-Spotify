import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-callback-token',
  templateUrl: './spotify-callback-token.component.html',
  styleUrls: ['./spotify-callback-token.component.sass']
})
export class SpotifyCallbackTokenComponent implements OnInit {

  constructor() {
    console.log('Passou pelo Construtor.')
  }

  ngOnInit() {
    console.log('Passou pelo OnInit.')
  }

}

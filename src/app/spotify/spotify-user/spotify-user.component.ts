import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SpotifyService } from 'src/app/services/spotify-service';

@Component({
  selector: 'app-spotify-user',
  templateUrl: './spotify-user.component.html',
  styleUrls: ['./spotify-user.component.sass']
})
export class SpotifyUserComponent implements OnInit {

  public user: {} = {};

  constructor(private spotifyService: SpotifyService) { }

  private stream: Subscription | null = null;

  ngOnInit() {
    let stream = this.spotifyService.getUserProfile();
    
    this.stream = stream.subscribe((x:{}) => this.user = x);
  }

  ngOnDestroy(): void {
    if(this.stream){
      this.stream.unsubscribe();
    }
  }
}

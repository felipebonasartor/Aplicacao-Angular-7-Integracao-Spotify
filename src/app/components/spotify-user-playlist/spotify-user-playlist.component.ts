import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpotifyService } from '../../services/spotify-service/spotify-service';

@Component({
  selector: 'spotify-user-playlist',
  templateUrl: './spotify-user-playlist.component.html',
  styleUrls: ['./spotify-user-playlist.component.sass']
})
export class SpotifyUserPlaylistComponent implements OnInit {
  public userPlaylist: any = {};
  private stream: Subscription | null = null;
  public playlistFormShow: boolean;
  public confirmDelete: boolean;
  public playlistSelectedId: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.loadPlaylist();
  }

  public loadPlaylist() {
    this.playlistFormShow = false;
    this.confirmDelete = false;
    let stream = this.spotifyService.getUserPlaylist();
    this.stream = stream.subscribe((x: {}) => this.userPlaylist = x);
  }


  public addPlaylist() {
    this.playlistFormShow = true;
  }

  public deletePlaylist(playlistId: string) {
    this.confirmDelete = true;
    this.playlistSelectedId = playlistId;
  }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.unsubscribe();
    }
  }
}

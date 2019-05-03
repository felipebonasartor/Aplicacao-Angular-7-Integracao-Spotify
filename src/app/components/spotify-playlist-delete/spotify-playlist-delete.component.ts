import { Component, OnInit } from '@angular/core';
import { SpotifyUserPlaylistComponent } from '../spotify-user-playlist/spotify-user-playlist.component';
import { SpotifyService } from 'src/app/services/spotify-service/spotify-service';

@Component({
  selector: 'spotify-playlist-delete',
  templateUrl: './spotify-playlist-delete.component.html',
  styleUrls: ['./spotify-playlist-delete.component.sass']
})
export class SpotifyPlaylistDeleteComponent implements OnInit {

  constructor(
    private spotifyUserPlaylistComponent: SpotifyUserPlaylistComponent,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }

  public cancelDeletePlaylist() {
    this.spotifyUserPlaylistComponent.confirmDelete = false;
  }

  public confirmeDelete() {
    this.spotifyUserPlaylistComponent.confirmDelete = false;

    this.spotifyService.deletePlaylist(this.spotifyUserPlaylistComponent.playlistSelectedId)
    .subscribe(result => {
      this.spotifyUserPlaylistComponent.loadPlaylist();
    });
  }
}

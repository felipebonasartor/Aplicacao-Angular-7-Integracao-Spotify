import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService } from '../../services/spotify-service/spotify-service';
import { SpotifyUserPlaylistComponent } from '../spotify-user-playlist/spotify-user-playlist.component';

@Component({
  selector: 'spotify-playlist-form',
  templateUrl: './spotify-playlist-form.component.html',
  styleUrls: ['./spotify-playlist-form.component.sass']
})
export class SpotifyPlaylistFormComponent implements OnInit {
  public playlist: any = { name: '', description: '' };
  public playlistForm: FormGroup;

  constructor(
    private spotifyService: SpotifyService, 
    private formBuilder: FormBuilder,
    private spotifyUserPlaylistComponent: SpotifyUserPlaylistComponent) { 
    this.playlistForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required, Validators.maxLength(100)
      ])],
      description: ['', Validators.compose([
        Validators.maxLength(300)
      ])]
    });
  }

  ngOnInit() {
  }

  public cancelPlaylist() {
    this.spotifyUserPlaylistComponent.playlistFormShow = false;
  }

  save(event) {
    event.preventDefault();

    this.spotifyService.createPlaylist(this.playlist)
      .subscribe(result => {
        this.spotifyUserPlaylistComponent.loadPlaylist();
      });
  }
}

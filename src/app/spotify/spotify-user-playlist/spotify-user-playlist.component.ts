import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpotifyService } from '../../services/spotify-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-spotify-user-playlist',
  templateUrl: './spotify-user-playlist.component.html',
  styleUrls: ['./spotify-user-playlist.component.sass']
})
export class SpotifyUserPlaylistComponent implements OnInit {
  playlistForm: FormGroup;
  playlist: any = { name: '', description: '' };

  public userPlaylist: {} = {};

  private stream: Subscription | null = null;

  constructor(private spotifyService: SpotifyService, formBuilder: FormBuilder, ) {
    this.playlistForm = formBuilder.group({
      name: ['', Validators.compose([
        Validators.required, Validators.maxLength(100)
      ])],
      description: ['', Validators.compose([
        Validators.required, Validators.maxLength(300)
      ])]
    });
  }

  ngOnInit() {
    let stream = this.spotifyService.getUserPlaylist();

    this.stream = stream.subscribe((x: {}) => this.userPlaylist = x);
  }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.unsubscribe();
    }
  }

  save(event) {
    event.preventDefault();

    this.spotifyService.createPlaylist(this.playlist)
      .subscribe(playlist => this.playlist.items.push(playlist));
  }
}

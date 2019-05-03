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
  private playlistFormShow: boolean;  
  private stream: Subscription | null = null;

  constructor(private spotifyService: SpotifyService, formBuilder: FormBuilder, ) {
    this.playlistForm = formBuilder.group({
      name: ['', Validators.compose([
        Validators.required, Validators.maxLength(100)
      ])],
      description: ['', Validators.compose([
        Validators.maxLength(300)
      ])]
    });
  }

  ngOnInit() {
    this.loadPlaylist();
  }

  loadPlaylist() {
    let stream = this.spotifyService.getUserPlaylist();

    this.stream = stream.subscribe((x: {}) => this.userPlaylist = x);
  }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.unsubscribe();
    }
  }

  addPlaylist(){
    this.playlistFormShow = true;
  }

  cancelPlaylist(){
    this.playlistFormShow = false;
  }

  save(event) {
    event.preventDefault();

    this.spotifyService.createPlaylist(this.playlist)
      .subscribe(result => {
        this.playlistFormShow = false;
        this.loadPlaylist();
      });
  }
}

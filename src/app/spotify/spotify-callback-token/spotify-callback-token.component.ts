import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spotify-callback-token',
  templateUrl: './spotify-callback-token.component.html',
  styleUrls: ['./spotify-callback-token.component.sass']
})
export class SpotifyCallbackTokenComponent implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['/user'])
  }

  ngOnInit() {

  }

}

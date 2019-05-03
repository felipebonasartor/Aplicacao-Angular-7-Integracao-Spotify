import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPlaylistDeleteComponent } from './spotify-playlist-delete.component';

describe('SpotifyPlaylistDeleteComponent', () => {
  let component: SpotifyPlaylistDeleteComponent;
  let fixture: ComponentFixture<SpotifyPlaylistDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyPlaylistDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyPlaylistDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

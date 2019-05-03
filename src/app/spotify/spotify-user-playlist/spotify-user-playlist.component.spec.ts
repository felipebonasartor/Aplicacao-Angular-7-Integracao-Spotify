import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyUserPlaylistComponent } from './spotify-user-playlist.component';

describe('SpotifyUserPlaylistComponent', () => {
  let component: SpotifyUserPlaylistComponent;
  let fixture: ComponentFixture<SpotifyUserPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyUserPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyUserPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

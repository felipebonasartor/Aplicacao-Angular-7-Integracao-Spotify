import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPlaylistFormComponent } from './spotify-playlist-form.component';

describe('SpotifyPlaylistFormComponent', () => {
  let component: SpotifyPlaylistFormComponent;
  let fixture: ComponentFixture<SpotifyPlaylistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyPlaylistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyPlaylistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

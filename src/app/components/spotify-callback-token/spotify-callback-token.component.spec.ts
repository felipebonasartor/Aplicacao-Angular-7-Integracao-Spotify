import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyCallbackTokenComponent } from './spotify-callback-token.component';

describe('SpotifyCallbackTokenComponent', () => {
  let component: SpotifyCallbackTokenComponent;
  let fixture: ComponentFixture<SpotifyCallbackTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyCallbackTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyCallbackTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

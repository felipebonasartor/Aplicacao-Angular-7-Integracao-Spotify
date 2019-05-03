import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators/catchError';
import { tap } from 'rxjs/operators/tap';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SpotifyService {
    private apiUserProfileUrl: string = 'https://api.spotify.com/v1/me';
    private apiUserPlaylistUrl: string = 'https://api.spotify.com/v1/me/playlists';    

    private user: {} = {};
    private user$: BehaviorSubject<{}>;

    private userPlaylist: {} = {};
    private userPlaylist$: BehaviorSubject<{}>;

    constructor(private http: HttpClient) {
        this.user$ = new BehaviorSubject<{}>(this.user);
        this.userPlaylist$ = new BehaviorSubject<{}>(this.userPlaylist);
    }

    public getUserProfile(): Observable<{}> {
        return this.http.get(this.apiUserProfileUrl, this.getHttpOptions()).pipe(
            tap((user: {}) => {
                this.user$.next(this.user);
                localStorage.setItem('spotifyUserId', (user as any).id);                
            }),
            catchError(this.handleError('getUserProfile'))
        );
    }

    public getUserPlaylist(): Observable<{}> {
        return this.http.get(this.apiUserPlaylistUrl, this.getHttpOptions()).pipe(
            tap((userPlaylist: {}) => {
                this.userPlaylist$.next(this.userPlaylist);
            }),
            catchError(this.handleError('getUserPlaylist'))
        );
    }

    public createPlaylist(playlist: {}): Observable<{}> {        
        let spotifyUserId = localStorage.getItem('spotifyUserId');
        let apiCreatePlaylistUrl = `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`;
        return this.http.post(apiCreatePlaylistUrl, playlist, this.getHttpOptions())
            .pipe(
                catchError(this.handleError('createPlaylist'))
            );
    }

    public getTokenUrl() {
        let scopes = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative';
        let client_id = '203d056607a24c6caee142fc67866230';
        let redirect_uri = 'https://felipebonasartor.github.io/spotify-app-integration/callback';
        let response_type = 'token';
        let state = 123;
    
        return `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=${response_type}&state=${state}}`;
      }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            (result as any) = error;
            return of(result as T);
        };
    }

    getHttpOptions() {
        const access_token = localStorage.getItem('access_token');        
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            })
        };
    }
}
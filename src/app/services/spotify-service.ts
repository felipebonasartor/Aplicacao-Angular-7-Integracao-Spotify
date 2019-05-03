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
    private apiCreatePlaylistUrl: string = 'https://api.spotify.com/v1/playlists';

    private user: {} = {};
    private user$: BehaviorSubject<{}>;

    private userPlaylist: {} = {};
    private userPlaylist$: BehaviorSubject<{}>;

    private httpOptions: {} = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {
        this.user$ = new BehaviorSubject<{}>(this.user);
        this.userPlaylist$ = new BehaviorSubject<{}>(this.userPlaylist);
    }

    public getUserProfile(): Observable<{}> {
        return this.http.get(this.apiUserProfileUrl, this.getHttpOptions()).pipe(
            tap((user: {}) => {
                this.user$.next(this.user);
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
        return this.http.post(this.apiCreatePlaylistUrl, playlist, this.getHttpOptions())
            .pipe(
                catchError(this.handleError('createPlaylist'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            (result as any) = error;
            return of(result as T);
        };
    }

    getHttpOptions() {
        const access_token = localStorage.getItem('access_token');
        // const access_token = 'BQAyZW0m0jCDYKbtINnrraxz8I0R0uo3C5I9FGr5zeaYzCsEEa81fU9RkqP8LJSfrXnl5oH8oXbUmrFZ_4s8GuMbKV71SnTWq9u7yguobcYj7f0l900jx65SOAscktlj7mmuFWmWcr-y4FR5RLI13QcoLr6mNSWdwGIQbjtm72o';
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            })
        };
    }
}
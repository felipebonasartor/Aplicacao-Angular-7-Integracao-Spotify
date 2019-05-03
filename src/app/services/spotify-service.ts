import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators/catchError';
import { tap } from 'rxjs/operators/tap';
import { of } from 'rxjs/observable/of';
import { SpotifyUser } from '../shared/spotify-user';

@Injectable()
export class SpotifyService {


    private apiUserProfileUrl: string = 'https://api.spotify.com/v1/me';
    private apiUserPlaylistUrl: string = 'https://api.spotify.com/v1/me/playlists';    

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

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            (result as any) = error;
            return of(result as T);
        };
    }

    getHttpOptions() {
        const access_token = localStorage.getItem('access_token');
        // const access_token = 'BQAbTx_EYVhFI9gmXSXU3wKKcsitCcmMn5NTgXZB-7wucgT5YOYLdGepTrxkz5Nsy9IWLA_afgf7Em32M26WCZW0oP4_YFrpIvGmQE40uKgzSfLRhHl7GV_kAyPsug3IWMYvCVqTCOHsWwBFJRlsBgaDJh0dz35HEMQcjx7YemsDjbhPZTJ4PsTlOn93Psi9r-3VHrLc7AMmbvB13jWFlRpA3DcgvLVNIedNttqvBeNN0bfjvvs';
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            })
        };
    }
}
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
    private apiAlbumsUrl: string = 'https://api.spotify.com/v1/me/albums';

    private user: {} = {};
    private user$: BehaviorSubject<{}>;

    private httpOptions: {} = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {
        this.user$ = new BehaviorSubject<{}>(this.user);
    }

    public getUserProfile(): Observable<{}> {
        return this.http.get(this.apiUserProfileUrl, this.getHttpOptions()).pipe(
            tap((user: {}) => {
                this.user$.next(this.user);
            }),
            catchError(this.handleError('getUserProfile'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            (result as any) = error;
            return of(result as T);
        };
    }

    getHttpOptions() {
        const token = localStorage.getItem('access_token');
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
    }
}
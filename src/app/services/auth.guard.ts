import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { fromPairs } from 'lodash';

import { SpotifyAuthResponse } from '../shared/spotify-auth-response.i';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor() { }

    public canActivate(
        next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivateChild(next, state);
    }

    public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!next.fragment) return true;

        const response = this.extractApiResponse(next.fragment);
        if (response) {
            //   this.tokenSvc.setAuthToken(response);
            // state.url = state.url.split('#')[0];
            window.location.hash = 'http://localhost:4200/user';
            console.log(response);
        }
        return !!response;
    }

    private extractApiResponse(fragment: string): SpotifyAuthResponse | null {
        if (!!fragment) {
            return fromPairs(fragment.split('&').map((s) => s.split('='))) as SpotifyAuthResponse;
        }
        return null;
    }
}

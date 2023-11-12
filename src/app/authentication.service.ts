import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    authentication: any;
    authenticated = false;

  constructor() { }

    logout() {

    }
}

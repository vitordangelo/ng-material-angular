import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from './user.model';
import { Authdata } from './auth-data.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private  isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  registerUser(authData: Authdata) {
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      this.authSuccessfully();
    })
    .catch(error => {
      console.log(error);
    });
  }

  login(authData: Authdata) {
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password);
    this.authSuccessfully();
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}

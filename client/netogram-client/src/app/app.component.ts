<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Auth, idToken, onAuthStateChanged, user} from "@angular/fire/auth";
import {select, Store} from "@ngrx/store";
import {ProfileState} from "./ngrx/profile/profile.state";
import {AuthState} from "./ngrx/auth/auth.state";
import {Observable, Subscription} from "rxjs";
import {ProfileModel} from "./models/profile.model";
import {AuthCredentialModel} from "./models/auth.model";
import * as AuthActions from "./ngrx/auth/auth.actions";
import * as ProfileActions from "./ngrx/profile/profile.actions";
=======
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { select, Store } from '@ngrx/store';
import { ProfileState } from './ngrx/profile/profile.state';
import { AuthState } from './ngrx/auth/auth.state';
import { combineLatest, Observable } from 'rxjs';
import { AuthCredentialModel } from './models/auth.model';
import * as AuthActions from './ngrx/auth/auth.actions';
import * as ProfileActions from './ngrx/profile/profile.actions';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
>>>>>>> 58c79f2d3ef7d6cb7c08673057c92f925b4602b1

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  uid = ' ';

  storeIdToken$!: Observable<string>;
  storeAuthCredential$!: Observable<AuthCredentialModel>;

<<<<<<< HEAD
  loginWithGoogleSuccess$!: Observable<boolean>;

  profileMine$!: Observable<ProfileModel>;
  getProfileMineSuccess$!: Observable<boolean>;

  profileMineFailure$!: Observable<boolean>;
=======
  authCredential$ = this.store.select((state) => state.auth.authCredential);
  mine$ = this.store.select((state) => state.profile.mine);
  getMineError$ = this.store.select((state) => state.profile.getErrorMessage);
  isGetMineSuccess$ = this.store.select(
    (state) => state.profile.isGetMineSuccess,
  );
  isGetMineFailure$ = this.store.select(
    (state) => state.profile.isGetMineFailure,
  );
>>>>>>> 58c79f2d3ef7d6cb7c08673057c92f925b4602b1

  title = 'netogram-client';

  isShowSpinner = true;

  constructor(
    private router: Router,
    private auth: Auth,
    private store: Store<{
      auth: AuthState;
      profile: ProfileState;
    }>,
  ) {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        let idToken = await user.getIdToken(true);
<<<<<<< HEAD
        // this.router.navigate(['/loading']).then();
=======

>>>>>>> 58c79f2d3ef7d6cb7c08673057c92f925b4602b1
        this.uid = user.uid;

        let auth: AuthCredentialModel = {
          uid: user.uid,
          userName: user.displayName || '',
          email: user.email || '',
          photoUrl: user.photoURL || '',
        };

        this.store.dispatch(AuthActions.storeIdToken({ idToken: idToken }));
        this.store.dispatch(AuthActions.storeAuthCredential({ auth: auth }));
        this.store.dispatch(ProfileActions.getMine({ uid: user.uid }));
      } else {
<<<<<<< HEAD
        // this.router.navigate(['/login']).then();
=======
        this.router.navigate(['/login']).then(() => {
          this.isShowSpinner = false;
        });
>>>>>>> 58c79f2d3ef7d6cb7c08673057c92f925b4602b1
      }
    });
  }

  ngOnInit(): void {
    this.storeIdToken$ = this.store.pipe(select((state) => state.auth.idToken));

    this.storeAuthCredential$ = this.store.pipe(
      select((state) => state.auth.authCredential),
    );

    this.storeIdToken$.subscribe((idToken) => {
      console.log('idToken', idToken);
    });

<<<<<<< HEAD
    this.storeAuthCredential$.subscribe((auth) => {
      if (auth) {
        console.log('auth', auth.uid);
        this.store.dispatch(ProfileActions.getMine({ uid: auth.uid }));
      }
    });

    this.profileMine$ = this.store.pipe(
      select((state) => state.profile.profile),
    );
    this.getProfileMineSuccess$ = this.store.pipe(
      select((state) => state.profile.isGetMineSuccess),
    );
    this.profileMineFailure$ = this.store.pipe(
      select((state) => state.profile.isGetMineFailure),
    );

    this.loginWithGoogleSuccess$ = this.store.pipe(
      select((state) => state.auth.loginWithGoogleSuccess),
=======
    combineLatest([
      this.authCredential$,
      this.isGetMineSuccess$,
      this.isGetMineFailure$,
      this.getMineError$,
      this.mine$,
    ]).subscribe(
      ([
        authCredential,
        isGetMineSuccess,
        isGetMineFailure,
        getMineError,
        mine,
      ]) => {
        if (authCredential.uid) {
          if (isGetMineSuccess && mine?.uid) {
            this.router.navigate(['/home']).then(() => {
              this.isShowSpinner = false;
            });
          } else if (isGetMineFailure && getMineError.status) {
            console.log(getMineError);
            this.router.navigate(['/register']).then(() => {
              this.isShowSpinner = false;
              this.store.dispatch(ProfileActions.clearMessages());
            });
          }
        }
      },
>>>>>>> 58c79f2d3ef7d6cb7c08673057c92f925b4602b1
    );
  }

}

import {Component, OnInit} from '@angular/core';
import {MaterialModule} from "../../shared/material.module";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {AuthState} from "../../ngrx/auth/auth.state";
import * as ProfileActions from "../../ngrx/profile/profile.actions";
import {combineLatest, Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MaterialModule, AsyncPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store<{
      profile: ProfileState;
      auth: AuthState;
    }>,
  ) {

  }

  subscriptions: Subscription[] = [];
  authCredential$ = this.store.select('auth', 'authCredential');
  isGetMineSuccess$ = this.store.select('profile', 'isGetMineSuccess');

  ngOnInit(): void {
    this.subscriptions.push(
      this.authCredential$.subscribe((auth) => {
        if (auth) {
          this.store.dispatch(ProfileActions.getMine({ uid: auth.uid }));
        }
      }),
      this.isGetMineSuccess$.subscribe((isSuccess) => {
        if (isSuccess) {
          this.router.navigate(['/home']).then();
        }else {
          this.router.navigate(['/register']).then();
        }
      })



    );
  }
}


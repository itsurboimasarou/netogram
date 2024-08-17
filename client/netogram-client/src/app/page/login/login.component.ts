import {Component, OnInit} from '@angular/core';

import {Router, RouterLink} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {AsyncPipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {AuthState} from "../../ngrx/auth/auth.state";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {Subscription} from "rxjs";
import * as AuthActions from "../../ngrx/auth/auth.actions";
@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        MaterialModule,
        RouterLink,
      AsyncPipe
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  constructor(
    private router: Router,
    private store: Store<{
      auth: AuthState;
      profile: ProfileState;
    }>,
  ) {}



  ngOnInit(): void {
    this.store.select('auth', 'loginWithGoogleSuccess').subscribe((auth) => {
      if (auth) {
        this.router.navigate(['/loading']).then();
      }
    });

  }
  loginWithGoogle() {
    this.store.dispatch(AuthActions.signInWithGoogle());
  }
}

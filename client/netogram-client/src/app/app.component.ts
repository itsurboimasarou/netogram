import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Auth, idToken, onAuthStateChanged, user} from "@angular/fire/auth";
import {select, Store} from "@ngrx/store";
import {ProfileState} from "./ngrx/profile/profile.state";
import {AuthState} from "./ngrx/auth/auth.state";
import {Observable, Subscription} from "rxjs";
import {AuthCredentialModel} from "./models/auth.model";
import * as AuthActions from "./ngrx/auth/auth.actions";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  uid = ' ';
  subscriptions: Subscription[] = [];
  storeIdToken$!: Observable<string>;
  storeAuthCredential$!: Observable<AuthCredentialModel>;



  title = 'netogram-client';
  constructor(
    private router: Router,
    private auth: Auth,
    private store: Store<{
      auth: AuthState;
      profile: ProfileState;
    }>,
    )
  {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        let idToken = await user.getIdToken(true);
        this.router.navigate(['/loading']).then();
        this.uid = user.uid;

        let auth: AuthCredentialModel = {
          uid: user.uid,
          userName: user.displayName || '',
          email: user.email || '',
          photoUrl: user.photoURL || '',
        };

        this.store.dispatch(AuthActions.storeIdToken({ idToken: idToken }));
        this.store.dispatch(AuthActions.storeAuthCredential({ auth: auth }));
      } else {
        this.router.navigate(['/login']).then();
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






  }
}

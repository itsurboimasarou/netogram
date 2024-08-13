import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';
import { exhaustMap, of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthCredentialModel } from '../../models/auth.model';

@Injectable()
export class AuthEffects {
  signInWithGoogle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signInWithGoogle),
      switchMap(() => {
        return this.authService
          .signInWithGoogle()
          .then((authCredential: AuthCredentialModel) => {
            return AuthActions.storeAuthCredential({ auth: authCredential });
          })
          .catch((error) => {
            return AuthActions.signInWithGoogleFailure();
          });
      }),
    );
  });

  signOutWithGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      switchMap(() => {
        return this.authService.logout();
      }),
      map(() => {
        return AuthActions.signOutSuccess();
      }),
      catchError(() => {
        return of(AuthActions.signOutFailure({ error: 'Logout failed' }));
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}

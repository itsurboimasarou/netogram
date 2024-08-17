import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from '../../services/profile/profile.service';
import * as profileActions from './profile.actions';
import { of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileModel } from '../../models/profile.model';

@Injectable()
export class ProfileEffects {
  createMine$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(profileActions.createMine),
      switchMap((action) => {
        console.log(action.mine);
        return this.profileService.createProfile(action.mine).pipe(
          map(() => {
            return profileActions.createMineSuccess();
          }),
          catchError((error) => {
            return of(
              profileActions.createMineFailure({ createErrorMessage: error }),
            );
          }),
        );
      }),
    );
  });

  getById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(profileActions.getById),
      switchMap((action) => {
        return this.profileService.getById(action.uid).pipe(
          map((profile: ProfileModel) => {
            return profileActions.getByIdSuccess({ profile });
          }),
          catchError((error) => {
            return of(
              profileActions.getByIdFailure({ getErrorMessageById: error }),
            );
          }),
        );
      }),
    );
  });

  getMine$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(profileActions.getMine),
      switchMap((action) => {
        return this.profileService.getById(action.uid).pipe(
          map((mine: ProfileModel) => {
            return profileActions.getMineSuccess({ mine });
          }),
          catchError((error) => {
            return of(
              profileActions.getMineFailure({ getErrorMessage: error }),
            );
          }),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
  ) {}
}

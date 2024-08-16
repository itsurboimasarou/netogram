import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StorageService } from '../../services/storage/storage.service';
import * as StorageActions from './storage.actions';
import { of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class StorageEffects {
  uploadFile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StorageActions.uploadFile),
      switchMap((action) => {
        return this.storageService
          .uploadFile(action.file, action.fileName)
          .pipe(
            map((url) => {
              return StorageActions.uploadFileSuccess({ url });
            }),
            catchError((error) => {
              return of(
                StorageActions.uploadFileFailure({
                  uploadFileErrorMessage: error,
                }),
              );
            }),
          );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private storageService: StorageService,
  ) {}
}

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfileState } from '../ngrx/profile/profile.state';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<{ profile: ProfileState }>);
  const router = inject(Router);
  return store.select('profile', 'mine').pipe(
    map((profile) => {
      if (profile && profile.uid) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    }),
  );
};

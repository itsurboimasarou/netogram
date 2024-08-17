import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShareModule } from '../../shared/share.module';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { AuthState } from '../../ngrx/auth/auth.state';
import { Subscription } from 'rxjs';
import * as ProfileActions from '../../ngrx/profile/profile.actions';
import { ProfileModel } from '../../models/profile.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule, ShareModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  regisForm = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl('', Validators.required),
    avatarUrl: new FormControl(''),
    uid: new FormControl(''),
  });

  regisData: ProfileModel = {
    email: '',
    userName: '',
    uid: '',
    bio: '',
    avatarUrl: '',
    coverUrl: '',
  };

  uid = '';

  createMineSuccess$ = this.store.select('profile', 'isCreateSuccess');

  constructor(
    private router: Router,
    private store: Store<{
      profile: ProfileState;
      auth: AuthState;
    }>,
  ) {
    this.subscription.push(
      this.store.select('auth').subscribe((auth: AuthState) => {
        if (auth.authCredential) {
          this.uid = auth.authCredential.uid;
          this.regisForm.patchValue({
            email: auth.authCredential.email,
            avatarUrl: auth.authCredential.photoUrl,
            uid: auth.authCredential.uid,
          });
        }
      }),
    );
  }

  ngOnInit(): void {
    this.createMineSuccess$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.router.navigate(['/home']).then(() => {
          this.store.dispatch(ProfileActions.getMine({ uid: this.uid }));
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  register() {
    this.regisData = {
      email: this.regisForm.value.email ?? '',
      userName: this.regisForm.value.userName ?? '',
      uid: this.regisForm.value.uid ?? '',
      bio: '',
      avatarUrl: this.regisForm.value.avatarUrl ?? '',
      coverUrl: '',
    };

    console.log(this.regisData);

    this.store.dispatch(ProfileActions.createMine({ mine: this.regisData }));
  }
}

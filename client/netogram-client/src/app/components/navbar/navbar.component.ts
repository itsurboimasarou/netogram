import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { AsyncPipe, NgClass } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../ngrx/profile/profile.state';
import * as AuthActions from '../../ngrx/auth/auth.actions';
import * as ProfileActions from '../../ngrx/profile/profile.actions';
import { Subscription } from 'rxjs';
import { ProfileModel } from '../../models/profile.model';
import { AuthState } from '../../ngrx/auth/auth.state';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, NgClass, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(
    private route: Router,
    private store: Store<{
      profile: ProfileState;
      auth: AuthState;
    }>,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveLinkBasedOnUrl();
      });

    this.setActiveLinkBasedOnUrl();

    this.subscription.push(
      this.logout$.subscribe((logout) => {
        if (logout == true) {
          this.route.navigate(['/login']).then();
        }
      }),
    );
  }

  subscription: Subscription[] = [];

  logout$ = this.store.select('auth', 'logOutSuccess');

  profileMine$ = this.store.select('profile', 'mine');
  user = {
    uid: '12',
    userName: 'John Doe',
    avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    coverUrl: 'https://www.w3schools.com/howto/img_snow.jpg',
    bio: 'I am a web developer',
    email: '',
  };

  link = {
    label: 'Notifications',
    route: 'notifications',
    icon: 'home_app_logo',
  };

  activeLink = false;

  setActive(link: any) {
    this.route.navigateByUrl(link.route).then();
  }

  setActiveLinkBasedOnUrl() {
    this.activeLink = this.route.url.includes('/notifications');
  }

  logout() {
    this.authService.logout();
    this.store.dispatch(AuthActions.clearState());
    this.store.dispatch(ProfileActions.clearGetState());
  }
}

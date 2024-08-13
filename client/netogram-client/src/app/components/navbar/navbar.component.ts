import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {AsyncPipe, NgClass} from "@angular/common";
import {filter} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {ProfileState} from "../../ngrx/profile/profile.state";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, NgClass, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  constructor(
    private route: Router,
    private store: Store<{profile: ProfileState}>,
  ) {
  }

  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveLinkBasedOnUrl();
    });

    this.setActiveLinkBasedOnUrl();
  }

  profileMine$ = this.store.select('profile', 'mine');
  user = {
    uid: '12',
    userName: 'John Doe',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
  }

  link = { label: 'Notifications', route: 'notifications', icon: 'home_app_logo' }

  activeLink = false;


  setActive(link: any) {
    this.route.navigateByUrl(link.route).then();
  }

  setActiveLinkBasedOnUrl() {
    if (this.route.url.includes('/notifications')) {
      this.activeLink = true;
    } else {
      this.activeLink = false;
    }
  }

}

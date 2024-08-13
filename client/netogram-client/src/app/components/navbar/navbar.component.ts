import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {NgClass} from "@angular/common";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveLinkBasedOnUrl();
    });

    this.setActiveLinkBasedOnUrl();
  }

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

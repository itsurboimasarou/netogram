import {Component, OnInit} from '@angular/core';
import {MaterialModule} from "../../shared/material.module";
import {NgClass} from "@angular/common";
import {Router, NavigationEnd} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  constructor(private route: Router) {
    if (this.route.url.includes('/home') ) {
      this.activeLink = this.navLinks[0];
    }else if (this.route.url.includes('/friends')) {
      this.activeLink = this.navLinks[1];
    }
  }

  ngOnInit(): void {

    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveLinkBasedOnUrl();
    });

    this.setActiveLinkBasedOnUrl();
  }
  navLinks = [
    { label: 'Home', route: 'home', icon: 'home_app_logo' },
    { label: 'Friends', route: 'friends', icon: 'diversity_2' },
  ];

  user = {
    uid: '12',
    userName: 'John Doe',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
  }
  activeLink = this.navLinks[0];

  setActive(link: any) {
    this.activeLink = link
    this.route.navigateByUrl(link.route).then();
  }

  //naviigate to profile
  navigateToProfile() {
    this.route.navigateByUrl(`/profile/${this.user.uid}`).then();

  }

  setActiveLinkBasedOnUrl() {
    if (this.route.url.includes('/home')) {
      this.activeLink = this.navLinks[0];
    } else if (this.route.url.includes('/friends')) {
      this.activeLink = this.navLinks[1];
    } else if (this.route.url.match(/\/profile\/\d+/)) {
      this.activeLink = this.navLinks[2];
    } else {
      this.activeLink = { label: 'Notifications', route: 'notifications', icon: 'home_app_logo' };
    }
  }
}

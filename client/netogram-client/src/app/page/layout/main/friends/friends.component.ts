import {Component, OnInit} from '@angular/core';
import {MaterialModule} from "../../../../shared/material.module";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink, RouterLinkActive, NgForOf],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss'
})
export class FriendsComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.navLinks = [
      {
        label: 'Friends',
        link: './friend list',
        index: 0
      }, {
        label: 'Friend requests',
        link: './friend request',
        index: 1
      },
    ];


  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}

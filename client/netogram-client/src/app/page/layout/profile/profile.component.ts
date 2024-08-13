import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";
import {MaterialModule} from "../../../shared/material.module";
import {Location} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    MaterialModule,

  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  constructor( private location :Location,private  activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    const {uid} = this.activeRoute.snapshot.params;
    console.log(uid);
    }
}

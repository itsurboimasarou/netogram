import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet, Scroll} from "@angular/router";
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";
import {MaterialModule} from "../../../shared/material.module";
import {Location} from "@angular/common";
import {PostComponent} from "../../../components/post/post.component";
import {MatDialog} from "@angular/material/dialog";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    MaterialModule,
    PostComponent,

  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  constructor( private location :Location,private  activeRoute: ActivatedRoute, private dialog: MatDialog
  ) {
    this.activeRoute = activeRoute;

    window.scrollTo({ top: window.innerHeight * 0.3, behavior: 'instant'});
  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    const {uid} = this.activeRoute.snapshot.params;
    console.log(uid);
    }

    profileEdit() : void {
      const dialogRef = this.dialog.open(ProfileEditComponent, {width: '100px'});
    }

}

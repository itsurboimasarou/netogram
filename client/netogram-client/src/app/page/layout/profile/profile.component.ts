import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  constructor(private  activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
  }

  ngOnInit(): void {
    const {uid} = this.activeRoute.snapshot.params;
    console.log(uid);
    }
}

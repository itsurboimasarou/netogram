import { Component } from '@angular/core';

import {MaterialModule} from "../../../../shared/material.module";
import {PostComponent} from "../../../../components/post/post.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    PostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  profilePic = 'https://www.w3schools.com/howto/img_avatar.png';
}

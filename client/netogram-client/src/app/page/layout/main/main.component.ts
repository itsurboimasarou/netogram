import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";
import {FriendSuggestionComponent} from "../../../components/friend-suggestion/friend-suggestion.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    FriendSuggestionComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

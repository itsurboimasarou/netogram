import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatButton, MatFabAnchor} from "@angular/material/button";
import {MaterialModule} from "../../shared/material.module";

@Component({
  selector: 'app-friend-suggestion',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    MatFabAnchor,
    MaterialModule
  ],
  templateUrl: './friend-suggestion.component.html',
  styleUrl: './friend-suggestion.component.scss'
})
export class FriendSuggestionComponent {
  suggestions = [
    { name: 'John Doe',
      profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
      mutual: 23,
    },
    { name: 'Jane Smith',
      profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
      mutual: 12,
    },
    { name: 'Jane Smith',
      profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
      mutual: 12,
    },
    { name: 'Jane Smith',
      profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
      mutual: 12,
    },
    { name: 'Jane Smith',
      profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
      mutual: 12,
    },
    { name: 'Jane Smith',
      profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
      mutual: 12,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    NgClass,
    MatButton
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  postUser = [
    {
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'John Doe',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      postTime: '3 days ago',
      postImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      likes: 856,
      comments: 23,
      shares: 12,
    },
  ]

  favoriteIcon = 'favorite_outlined';
  commentIcon = 'comment_outlined';
  shareIcon = 'ios_share_outlined';
  bookmarkIcon = 'bookmark_outlined';
  likes = 856;

  toggleFavorite() {
    this.favoriteIcon = this.favoriteIcon === 'favorite_outlined' ? 'favorite' : 'favorite_outlined';
    this.likes += this.favoriteIcon === 'favorite' ? 1 : -1;
  }

  toggleShare() {
    this.shareIcon = this.shareIcon === 'ios_share_outlined' ? 'ios_share' : 'ios_share_outlined';
  }

  toggleBookmark() {
    this.bookmarkIcon = this.bookmarkIcon === 'bookmark_outlined' ? 'bookmark' : 'bookmark_outlined';
  }
}

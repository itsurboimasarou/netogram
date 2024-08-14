import { Component } from '@angular/core';
import {MaterialModule} from "../../shared/material.module";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MaterialModule, NgClass, NgStyle],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  title = 'detail';
  commentUser = [
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
  ];
  displayedComments = 10;

  imageUrl = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  loadMoreComments() {
    this.displayedComments += 10;
  }

  favoriteIcon = 'favorite_outlined';
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

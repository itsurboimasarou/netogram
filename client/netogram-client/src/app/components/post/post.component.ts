import { Component } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    NgClass,
    MatButton,
    NgForOf
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
      postImages: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
        'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
        'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      likes: 856,
      comments: 23,
      shares: 12,
    },
  ];

  favoriteIcon = 'favorite_outlined';
  commentIcon = 'comment_outlined';
  shareIcon = 'ios_share_outlined';
  bookmarkIcon = 'bookmark_outlined';
  likes = 856;
  activeImageIndex = [0];
  isDragging = false;
  startX = 0;
  scrollLeft = 0;

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

  prevImage(postIndex: number) {
    this.activeImageIndex[postIndex] = (this.activeImageIndex[postIndex] > 0) ? this.activeImageIndex[postIndex] - 1 : this.postUser[postIndex].postImages.length - 1;
  }

  nextImage(postIndex: number) {
    this.activeImageIndex[postIndex] = (this.activeImageIndex[postIndex] < this.postUser[postIndex].postImages.length - 1) ? this.activeImageIndex[postIndex] + 1 : 0;
  }

  startDrag(event: MouseEvent, postIndex: number) {
    const target = event.currentTarget as HTMLElement | null;
    if (target && event.target instanceof HTMLImageElement) {
      this.isDragging = true;
      this.startX = event.pageX - target.offsetLeft;
      this.scrollLeft = target.scrollLeft;
    }
  }

  onDrag(event: MouseEvent, postIndex: number) {
    if (!this.isDragging) return;
    event.preventDefault();
    const target = event.currentTarget as HTMLElement | null;
    if (target) {
      const x = event.pageX - target.offsetLeft;
      const walk = (x - this.startX) * 2; // Adjusted scroll sensitivity
      target.scrollLeft = this.scrollLeft - walk;
    }
  }

  endDrag(event: MouseEvent, postIndex: number) {
    this.isDragging = false;
  }
}

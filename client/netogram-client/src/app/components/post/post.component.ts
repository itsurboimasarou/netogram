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

  prevImage(carousel: HTMLDivElement) {
    const imageWidth = carousel.querySelector('.post-image')?.clientWidth || 0;
    carousel.scrollLeft -= imageWidth + 10; // 10 is the gap between images
  }

  nextImage(carousel: HTMLDivElement) {
    const imageWidth = carousel.querySelector('.post-image')?.clientWidth || 0;
    carousel.scrollLeft += imageWidth + 10; // 10 is the gap between images
  }

  onMouseDown(event: MouseEvent, carousel: HTMLDivElement) {
    event.preventDefault(); // Prevent default behavior to ensure smooth dragging
    this.isDragging = true;
    this.startX = event.pageX - carousel.offsetLeft;
    this.scrollLeft = carousel.scrollLeft;
  }

  onMouseLeave() {
    this.isDragging = false;
  }

  onMouseUp() {
    this.isDragging = false;
  }

  onMouseMove(event: MouseEvent, carousel: HTMLDivElement) {
    if (!this.isDragging) return;
    event.preventDefault(); // Prevent default behavior
    const x = event.pageX - carousel.offsetLeft;
    const walk = (x - this.startX) * 2; // Adjust the multiplier to control the scroll speed
    carousel.scrollLeft = this.scrollLeft - walk;
  }

}

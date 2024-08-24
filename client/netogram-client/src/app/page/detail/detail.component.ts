import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import {
  AsyncPipe,
  Location,
  NgClass,
  NgForOf,
  NgStyle,
} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostState } from '../../ngrx/post/post.state';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PostModel } from '../../models/post.model';
import { ProfileModel } from '../../models/profile.model';
import { IdToAvatarPipe } from '../../shared/pipes/id-to-avatar.pipe';
import { IdToNamePipe } from '../../shared/pipes/id-to-name.pipe';
import { DateTranformPipe } from '../../shared/pipes/date-tranform.pipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MaterialModule,
    NgClass,
    NgStyle,
    NgForOf,
    AsyncPipe,
    IdToAvatarPipe,
    IdToNamePipe,
    DateTranformPipe,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute,
    private store: Store<{
      profile: ProfileState;
      post: PostState;
    }>,
  ) {
    this.activeRoute = activeRoute;
  }

  subscriptions: Subscription[] = [];

  profileMine$ = this.store.select('profile', 'mine');

  postDetail$ = this.store.select('post', 'postDetail');

  ngOnInit(): void {
    this.subscriptions.push(
      this.profileMine$.subscribe((profile) => {
        if (profile) {
          this.profileMine = profile;
        }
      }),
      this.postDetail$.subscribe((post) => {
        this.postDetail = post;
      }),
    );
  }

  postDetail: PostModel = <PostModel>{};
  profileMine: ProfileModel = <ProfileModel>{};

  title = 'detail';
  commentUser = [
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Doe',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Doe',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01',
    },
  ];
  displayedComments = 10;

  imageUrl = [
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
    'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6',
  ];

  loadMoreComments() {
    this.displayedComments += 10;
  }

  favoriteIcon = 'favorite_outlined';
  shareIcon = 'ios_share_outlined';
  bookmarkIcon = 'bookmark_outlined';
  likes = 856;
  currentIndex = 0;

  toggleFavorite() {
    this.favoriteIcon =
      this.favoriteIcon === 'favorite_outlined'
        ? 'favorite'
        : 'favorite_outlined';
    this.likes += this.favoriteIcon === 'favorite' ? 1 : -1;
  }

  toggleShare() {
    this.shareIcon =
      this.shareIcon === 'ios_share_outlined'
        ? 'ios_share'
        : 'ios_share_outlined';
  }

  toggleBookmark() {
    this.bookmarkIcon =
      this.bookmarkIcon === 'bookmark_outlined'
        ? 'bookmark'
        : 'bookmark_outlined';
  }

  prevImage() {
    console.log(this.currentIndex);
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.imageUrl.length - 1;
  }

  nextImage() {
    console.log(this.currentIndex);
    this.currentIndex =
      this.currentIndex < this.imageUrl.length - 1 ? this.currentIndex + 1 : 0;
  }

  goBack(): void {
    this.location.back();
  }
}

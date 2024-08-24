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
import {delay, Observable, Subscription} from 'rxjs';
import { PostModel } from '../../models/post.model';
import { ProfileModel } from '../../models/profile.model';
import { IdToAvatarPipe } from '../../shared/pipes/id-to-avatar.pipe';
import { IdToNamePipe } from '../../shared/pipes/id-to-name.pipe';
import { DateTranformPipe } from '../../shared/pipes/date-tranform.pipe';
import {CommentState} from "../../ngrx/comment/comment.state";
import * as CommentActions from "../../ngrx/comment/comment.actions";
import {CommentModel} from "../../models/comment.model";
import * as ProfileActions from "../../ngrx/profile/profile.actions";
import {map} from "rxjs/operators";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

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
    ReactiveFormsModule,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {

  commentForm = new FormGroup({
    text: new FormControl(''),
  });

  commentData: CommentModel = {
    commentId: 1,
    uid: 'asdfasdfsadf',
    postId: 8909711579549696,
    text: '',
    createdAt: 'asdfasd'
  }
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute,
    private store: Store<{
      profile: ProfileState;
      post: PostState;
      comment: CommentState;
    }>,

  ) {
    this.postDetail$.subscribe((post) => {
      if (post && post.id) {
        this.store.dispatch(CommentActions.getComments({ postId: Number(post.id) }));
      }
    });
    this.activeRoute = activeRoute;
  }

  subscriptions: Subscription[] = [];

  commentList$ = this.store.select('comment', 'comments');

  profileMine$ = this.store.select('profile', 'mine');

  postDetail$ = this.store.select('post', 'postDetail');

  profile$ = this.store.select('profile', 'profile');

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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  postDetail: PostModel = <PostModel>{};
  profileMine: ProfileModel = <ProfileModel>{};

  title = 'detail';

  displayedComments = 10;

  imageUrl = [
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
    'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6',
  ];

  createComment() {
    console.log(this.commentForm.value.text);
    this.postDetail$.subscribe((post) => {
      if (post && post.id) {
        // this.commentData = {...this.commentData, postId: Number(post.id)}
        this.commentData.postId = Number(post.id);
        console.log(this.commentData.postId);
      }
    });
    // this.commentData = {...this.commentData, text: this.commentForm.value.text as string}
    this.commentData.text = this.commentForm.value.text as string;
    console.log(this.commentData);

    this.store.dispatch(CommentActions.createComment({comment: this.commentData}));
    this.store.dispatch(CommentActions.getComments({postId: this.commentData.postId}));

    this.commentList$.subscribe((comments) => {
      console.log(comments); // đừng xóa không comment không hiện lên :((
    })
    this.commentForm.reset();
    // this.commentList$.subscribe((comments) => {
    //   console.log(comments);
    // })
  }

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

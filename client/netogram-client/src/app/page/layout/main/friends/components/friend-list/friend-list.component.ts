import {Component, HostListener} from '@angular/core';
import {MaterialModule} from "../../../../../../shared/material.module";
import {PageEvent} from "@angular/material/paginator";
import {AsyncPipe, SlicePipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {FriendshipState} from "../../../../../../ngrx/friend-ship/friendship.state";
import * as FriendshipActions from "../../../../../../ngrx/friend-ship/friendship.actions";
import {async, Observable} from "rxjs";
import {FriendshipModel} from "../../../../../../models/friendship.model";
import * as ProfileActions from "../../../../../../ngrx/profile/profile.actions";
import {ProfileModel} from "../../../../../../models/profile.model";
import {ProfileState} from "../../../../../../ngrx/profile/profile.state";
import {IdToAvatarPipe} from "../../../../../../shared/pipes/id-to-avatar.pipe";
import {IdToNamePipe} from "../../../../../../shared/pipes/id-to-name.pipe";

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [MaterialModule, SlicePipe, AsyncPipe, IdToAvatarPipe, IdToNamePipe],
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.scss'
})
export class FriendListComponent {

  friendships$: Observable<FriendshipModel[] | null> = this.store.select('friendship', 'friendships');
  isGetFriendListSucces$ = this.store.select('friendship','friendshipSuccess');

  constructor(private store: Store<{
    friendship: FriendshipState;
    profile: ProfileState;
  }>) {
    this.store.dispatch(FriendshipActions.getAllFriendships({uid: '5', page: 1, limit: 10}));
    this.isGetFriendListSucces$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.friendships$.subscribe((friendships) => {
          console.log(friendships)
        })
      }
    })
  }

  ngOnInit() {
    this.onResize({ target: window });


  }

  start = 0;
  end = 10;

  user1 = {
    name: 'Jack',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    mutualFriends: '240 mutual friends',
    id: 5,
  }

  user2 = {
    name: 'Jane',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    mutualFriends: '150 mutual friends',
    id: 6,
  }

  pageSizeOptions = [10];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 1180) {
      console.log('1180')
      this.pageSizeOptions = [8];
      this.start = 0;
      this.end = 8;
    } else {
      console.log('else')
      this.pageSizeOptions = [10];
      this.start = 0;
      this.end = 10;
    }
  }


  handlePageEvent(event: PageEvent) {
    this.start = event.pageIndex * event.pageSize;
    this.end = this.start + event.pageSize;
    console.log(event.pageSize)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  friendsList: any[] = [this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user2, this.user1, this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2];

}

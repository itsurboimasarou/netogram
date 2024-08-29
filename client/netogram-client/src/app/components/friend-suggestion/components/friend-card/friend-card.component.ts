import {Component, Input} from '@angular/core';
import {ProfileModel} from "../../../../models/profile.model";
import {Store} from "@ngrx/store";
import {ProfileState} from "../../../../ngrx/profile/profile.state";
import {FriendshipState} from "../../../../ngrx/friend-ship/friendship.state";
import * as FriendshipActions from "../../../../ngrx/friend-ship/friendship.actions";
import {AsyncPipe} from "@angular/common";
import {IdToAvatarPipe} from "../../../../shared/pipes/id-to-avatar.pipe";
import {IdToNamePipe} from "../../../../shared/pipes/id-to-name.pipe";
import {MatButton} from "@angular/material/button";
import {getFriendshipStatus} from "../../../../ngrx/friend-ship/friendship.actions";
import {FriendshipModel} from "../../../../models/friendship.model";
import {SuggestedFriend} from "../../../../models/suggested-friend";

@Component({
  selector: 'app-friend-card',
  standalone: true,
  imports: [
    AsyncPipe,
    IdToAvatarPipe,
    IdToNamePipe,
    MatButton
  ],
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.scss'
})
export class FriendCardComponent {
  @Input() friend: SuggestedFriend = {
    suggestedFriend: "",
    mutualFriendsCount: 0,
  };

  friendRequestSentData: FriendshipModel = {
    id: 0,
    uid: "",
    friendUid: "",
    status: ""
  };

  status = 'none';

  isRemoved$ = this.store.select('friendship', 'isDeleteSuccess');
  friendSatus$ = this.store.select('friendship', 'friendshipStatus');
  isSuggestedFriendsLoading$ = this.store.select('friendship', 'isCreating');
  isSuggestedFriendsLoaded$ = this.store.select('friendship', 'isCreateSuccess');
  mineProfile$ = this.store.select('profile', 'mine');

  constructor(private store: Store<{
    profile: ProfileState,
    friendship: FriendshipState
  }>) {
    console.log('11111')
    this.store.dispatch(FriendshipActions.getFriendshipStatus({friendUid: this.friend.suggestedFriend}));
    this.friendSatus$.subscribe((friendSatus) => {
      if (friendSatus){
        this.status = friendSatus.status;
      }
    })
  }

  addFriend(friendUid: string){
    this.mineProfile$.subscribe((mineProfile) => {
      if (mineProfile) {
        this.friendRequestSentData = {...this.friendRequestSentData, friendUid: friendUid, uid: mineProfile.uid};
      }
    })
    this.friendRequestSentData = {...this.friendRequestSentData, friendUid};
    console.log(this.friendRequestSentData);
    this.store.dispatch(FriendshipActions.addFriend({friendShipModel: this.friendRequestSentData}));

    this.isSuggestedFriendsLoaded$.subscribe((isSuggestedFriendsLoaded) => {
      if (isSuggestedFriendsLoaded){
        this.status = 'pending';
      }
    })


    // this.isSuggestedFriendsLoaded$.subscribe((isSuggestedFriendsLoaded) => {
    //   if (isSuggestedFriendsLoaded) {
    //     this.mineProfile$.subscribe((mineProfile) => {
    //       if (mineProfile) {
    //         this.store.dispatch(FriendshipActions.getSuggestedFriends({uid: mineProfile.uid,page:1,limit:5} ));
    //     }
    //   })
    // }})
  }

  removeRequest(friendUid: string){
    this.mineProfile$.subscribe((mineProfile) => {
      if (mineProfile) {
        this.friendRequestSentData = {...this.friendRequestSentData, friendUid: friendUid, uid: mineProfile.uid};
      }
    })

    this.isRemoved$.subscribe((isRemoved) => {
      if (isRemoved) {
        this.status = 'none';
      }
    })
  }
}

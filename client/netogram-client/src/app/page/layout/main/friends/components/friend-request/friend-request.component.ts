import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {MaterialModule} from "../../../../../../shared/material.module";
import {NgForOf, SlicePipe} from "@angular/common";

@Component({
  selector: 'app-friend-request',
  standalone: true,
  imports: [MaterialModule, SlicePipe, NgForOf],
  templateUrl: './friend-request.component.html',
  styleUrl: './friend-request.component.scss'
})
export class FriendRequestComponent {

  start = 0;
  end = 6;


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

  userList: any[] = [this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2,this.user1,this.user2];

  handlePageEvent(event: PageEvent) {
    this.start = event.pageIndex * event.pageSize;
    this.end = this.start + event.pageSize;
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

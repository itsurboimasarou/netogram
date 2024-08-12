import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {MaterialModule} from "../../../../shared/material.module";
import {NgForOf, SlicePipe} from "@angular/common";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MaterialModule, SlicePipe, NgForOf],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  start = 0;
  end = 6;
  constructor() {
  }
  user1 = {
    name: 'John',
    age: 30,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    description: 'commented on your post  ',
    isNew: true,
    id: 1,
    timestamp: '4w',
  } ;

  user2 = {
    name: 'Jane',
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'liked your post',
    isNew: false,
    id: 2,
    timestamp: '4w',
  } ;

  user3 = {
    name: 'Joe',
    age: 35,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'sent you a friend request',
    isNew: true,
    id: 3,
    timestamp: '4w',
  } ;

  user4 = {
    name: 'Jill',
    age: 40,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'liked your post',
    isNew: true,
    id: 4,
    timestamp: '4w',
  } ;

  user5 = {
    name: 'Jack',
    age: 45,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'liked your post',
    isNew: true,
    id: 5,
    timestamp: '4w',
  } ;

  userList: any[] = [this.user1, this.user2, this.user3, this.user4, this.user5,this.user1,this.user2,this.user2, this.user3, this.user4, this.user5,this.user2, this.user3, this.user4, this.user5,this.user2, this.user3, this.user4, this.user5,this.user2, this.user3, this.user4, this.user5,this.user2, this.user3, this.user4, this.user5,];

  handlePageEvent(event: PageEvent) {
    this.start = event.pageIndex * event.pageSize;
    this.end = this.start + event.pageSize;
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

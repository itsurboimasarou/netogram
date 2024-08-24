import {Component, HostListener} from '@angular/core';
import {MaterialModule} from "../../../../../../shared/material.module";
import {PageEvent} from "@angular/material/paginator";
import {SlicePipe} from "@angular/common";

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [MaterialModule, SlicePipe],
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.scss'
})
export class FriendListComponent {

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

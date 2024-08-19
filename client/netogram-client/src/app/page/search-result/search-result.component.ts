import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatList, MatListItem } from "@angular/material/list";
import { MatButton } from "@angular/material/button";
import { NgForOf } from "@angular/common";
import { PostComponent } from "../../components/post/post.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";


interface UserResult {
  uid: string;
  name: string;
  avatarUrl: string;
  mutualFriends: number;
}

interface PostResult {
  uid: string;
  userName: string;
  avatar: string;
  caption: string;
  postImages: string[];
  postTime: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatList,
    MatListItem,
    MatButton,
    NgForOf,
    PostComponent,
    NavbarComponent,
    RouterOutlet
  ],
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchTerm: string = '';
  userResults: UserResult[] = [];
  postResults: PostResult[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.performSearch();
    });
  }

  performSearch() {
    this.userResults = this.getMockUserResults();
    this.postResults = this.getMockPostResults();
  }

  private getMockUserResults(): UserResult[] {
    return [
      { uid: '1', name: 'Shiba', avatarUrl: 'https://example.com/avatar1.jpg', mutualFriends: 230 },
      { uid: '2', name: 'Akita', avatarUrl: 'https://example.com/avatar2.jpg', mutualFriends: 180 },
      { uid: '3', name: 'Husky', avatarUrl: 'https://example.com/avatar3.jpg', mutualFriends: 150 },
    ];
  }

  private getMockPostResults(): PostResult[] {
    return [
      {
        uid: '4',
        userName: 'Fried Dog',
        avatar: 'https://example.com/avatar4.jpg',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        postImages: ['https://example.com/post-image1.jpg', 'https://example.com/post-image2.jpg'],
        postTime: '3 days ago',
        likes: 30,
        comments: 30,
        shares: 30,
        isLiked: false
      },
      {
        uid: '5',
        userName: 'Cool Cat',
        avatar: 'https://example.com/avatar5.jpg',
        caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        postImages: ['https://example.com/post-image3.jpg'],
        postTime: '1 day ago',
        likes: 45,
        comments: 20,
        shares: 15,
        isLiked: false
      },
    ];
  }
}

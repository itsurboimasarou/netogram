import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatList, MatListItem } from "@angular/material/list";
import { MatButton, MatFabButton } from "@angular/material/button";
import {AsyncPipe, Location, NgForOf} from "@angular/common";
import { PostComponent } from "../../components/post/post.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MatIcon } from "@angular/material/icon";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchState} from "../../ngrx/search/search.state";
import * as SearchActions from "../../ngrx/search/search.actions";
import { ProfileModel } from '../../models/profile.model';
import { PostModel } from '../../models/post.model';

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
    RouterOutlet,
    MatIcon,
    MatFabButton,
    AsyncPipe
  ],
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchTerm: string = '';
  profiles$: Observable<ProfileModel[]>;
  posts$: Observable<PostModel[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<{ search: SearchState }>
  ) {
    this.profiles$ = this.store.select(state => state.search.searchResult.profiles);
    this.posts$ = this.store.select(state => state.search.searchResult.posts);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'];
      if (this.searchTerm) {
        this.store.dispatch(SearchActions.search({ query: this.searchTerm }));
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}

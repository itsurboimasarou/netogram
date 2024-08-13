import {Routes} from "@angular/router";
import {FriendsComponent} from "./friends.component";

export const FRIENDS_ROUTES: Routes = [
  {
    path: '',
    component: FriendsComponent,
    children: [
      {
        path: '',
        redirectTo: 'friend list',
        pathMatch: 'full',
      },
      {
        path: 'friend request',
        loadComponent: () =>
          import('./components/friend-request/friend-request.component').then(
            (m) => m.FriendRequestComponent,
          ),
      },
      {
        path: 'friend list',
        loadComponent: () =>
          import('./components/friend-list/friend-list.component').then(
            (m) => m.FriendListComponent,
          ),
      }
    ]
  }
  ];

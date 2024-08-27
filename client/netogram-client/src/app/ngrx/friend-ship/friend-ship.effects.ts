import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CommentService} from "../../services/comment/comment.service";
import * as FriendshipActions from "./friendship.actions";
import {exhaustMap, mergeMap, of} from "rxjs";
import {FriendShipService} from "../../services/friend-ship/friend-ship.service";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class FriendshipEffects {

  constructor(
    private actions$: Actions,
    private friendshipService: FriendShipService
  ) {
  }

  getAllFriendship$ = createEffect(() => this.actions$.pipe(
    ofType(FriendshipActions.getAllFriendships),
    mergeMap((action) => this.friendshipService.getFriendList(action.uid, action.page, action.limit).pipe(
      map((friendships) => {
        return FriendshipActions.getAllFriendshipsSuccess({ friendships })
      }),
      catchError(() => of(FriendshipActions.getAllFriendshipsFailure()))
    ))
  ));

  createFriendship$ = createEffect(() => this.actions$.pipe(
    ofType(FriendshipActions.addFriend),
    exhaustMap((action) => this.friendshipService.addFriend(action.friendShipModel).pipe(
      map(() => {
        return FriendshipActions.addFriendSuccess()
      }),
      catchError(() => of(FriendshipActions.addFriendFailure
  ))
    ))
  ));
}

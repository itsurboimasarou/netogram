import {createAction, props} from "@ngrx/store";
import {FriendshipModel} from "../../models/friendship.model";

export const getAllFriendships = createAction('[Friendship] Get All Friendships',props<{uid: string, page: number, limit: number}>());
export const getAllFriendshipsSuccess = createAction('[Friendship] Get All Friendships Success',props<{friendships: FriendshipModel[]}>());
export const getAllFriendshipsFailure = createAction('[Friendship] Get All Friendships Error');

export const addFriend = createAction('[Friendship] Add Friend',props<{friendShipModel: FriendshipModel}>());
export const addFriendSuccess = createAction('[Friendship] Add Friend Success');
export const addFriendFailure = createAction('[Friendship] Add Friend Error');

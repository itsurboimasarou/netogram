import {FriendshipState} from "./friendship.state";
import {createReducer, on} from "@ngrx/store";
import * as FriendshipActions from "./friendship.actions";

const initalState: FriendshipState = {
  friendships: [],
  friendshipsIsLoading: false,
  friendshipsIstError: '',
  friendshipSuccess: false,

  isCreating: false,
  isCreateSuccess: false,
  createErrorMessage: '',
};

export const friendshipReducer = createReducer(
  initalState,
  on(FriendshipActions.getAllFriendships, (state, action) => {
    console.log(action.type);
    return <FriendshipState>{
      ...state,
      friendshipsIsLoading: true,
      friendshipSuccess: false,
    };
  }),
  on(FriendshipActions.getAllFriendshipsSuccess, (state, action) => {
    console.log(action.type);
    return <FriendshipState>{
      ...state,
      friendshipsIsLoading: false,
      friendshipSuccess: true,
      friendships: action.friendships,
    };
  }),
  on(FriendshipActions.getAllFriendshipsFailure, (state, action) => {
    return <FriendshipState>{
      ...state,
      friendshipsIsLoading: false,
      friendshipSuccess: false,
      friendshipsIstError: 'Error loading friendships',
    }
  }),
  on(FriendshipActions.addFriend, (state, action) => {
    return <FriendshipState>{
      ...state,
      isCreating: true,
      isCreateSuccess: false,
    }
  }),
  on(FriendshipActions.addFriendSuccess, (state, action) => {
    return <FriendshipState>{
      ...state,
      isCreating: false,
      isCreateSuccess: true,
    }
  }),
  on(FriendshipActions.addFriendFailure, (state, action) => {
    return <FriendshipState>{
      ...state,
      isCreating: false,
      isCreateSuccess: false,
      createErrorMessage: 'Error creating friendship',
    }
  })
)

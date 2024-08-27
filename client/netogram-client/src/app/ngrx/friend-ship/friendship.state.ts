import {FriendshipModel} from "../../models/friendship.model";

export interface FriendshipState{
  friendships: FriendshipModel[] | null;
  friendshipsIsLoading: boolean;
  friendshipsIstError: string;
  friendshipSuccess: boolean;

  isCreating: boolean;
  isCreateSuccess: boolean;
  createErrorMessage: string;
}

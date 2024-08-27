import { Injectable } from '@angular/core';
import { HttpClientAuth } from '../../util/http-client-auth';
import { FriendshipModel } from '../../models/friendship.model';

@Injectable({
  providedIn: 'root',
})
export class FriendShipService {
  constructor(private httpClient: HttpClientAuth) {}

  getFriendRequests(uid: string, page: number, limit: number) {
    return this.httpClient.get(`friendship/${uid}?page=${page}&limit=${limit}`);
  }

  addFriend(friendShipModel: FriendshipModel) {
    return this.httpClient.post('friendship', friendShipModel);
  }

  replyFriendRequest(friendShipModel: FriendshipModel) {
    return this.httpClient.put('friendship/reply', friendShipModel);
  }

  unfriend(uid: string, friendUid: string) {
    return this.httpClient.delete(`friendship/unfriend/${uid}/${friendUid}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClientAuth} from "../../util/http-client-auth";
import {LikepostModel} from "../../models/likepost.model";

@Injectable({
  providedIn: 'root'
})
export class LikepostService {

  constructor(private httpClient: HttpClientAuth) { }

  createLikePost(like: LikepostModel) {
    return this.httpClient.post('likepost', like);
  }

  getLikePostCount(postId: number) {
    return this.httpClient.get(`likepost?postId=${postId}`);
  }

  getIsLiked(postId: number) {
    return this.httpClient.get(`likepost/isLiked?postId=${postId}`);
  }

  deleteLiked(postId: number) {
    return this.httpClient.delete(`likepost?postId=${postId}`);
  }
}

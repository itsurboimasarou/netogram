import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PostService} from "../../services/post/post.service";
import * as PostActions from "./post.actions";
import {of, switchMap} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpErrorResponseModel} from "../../models/http-error-response.model";
@Injectable()
export class PostEffects {

  createPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PostActions.CreatePost),
      switchMap((action) => {
        return this.postService.createPost(action.post).pipe(
          map(() => {
            return PostActions.CreatePostSuccess();
          }),
          catchError((error: HttpErrorResponseModel) => {
            return of(
              PostActions.CreatePostFailure({ createPostErrorMessage: error }),
            );
          }),
        );
      }),
    );
  });



  constructor(
    private action$: Actions,
    private postService: PostService
  ) {}
}

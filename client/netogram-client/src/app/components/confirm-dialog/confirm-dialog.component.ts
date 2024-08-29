import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import * as PostActions from '../../ngrx/post/post.actions';
import { PostModel } from '../../models/post.model';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { PostState } from '../../ngrx/post/post.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private store: Store<{
      profile: ProfileState;
      post: PostState;
    }>,
  ) {}

  subscriptions: Subscription[] = [];
  isDeleteSuccess$ = this.store.select('post', 'isDeleteSuccess');

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.isDeleteSuccess$.subscribe((isDeleteSuccess) => {
        if (isDeleteSuccess) {
          window.location.reload();
          this.dialogRef.close(true);
        }
      }),
    );
  }

  onConfirm(): void {
    this.dialogRef.close(true);
    this.store.dispatch(
      PostActions.DeletePost({
        id: this.data.post,
        uid: this.data.mineUid,
      }),
    );
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}

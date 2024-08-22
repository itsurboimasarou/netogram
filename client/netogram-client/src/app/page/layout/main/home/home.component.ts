import {
  Component,
  inject,
  model,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { PostComponent } from '../../../../components/post/post.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../components/dialog/dialog.component';
import * as PostActions from '../../../../ngrx/post/post.actions';
import { Store } from '@ngrx/store';
import { PostState } from '../../../../ngrx/post/post.state';
import { ProfileState } from '../../../../ngrx/profile/profile.state';
import { Subscription } from 'rxjs';
import { PostResponse } from '../../../../models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<{
      post: PostState;
      profile: ProfileState;
    }>,
  ) {
    this.store.dispatch(
      PostActions.GetAllPost({ pageNumber: 1, limitNumber: 5 }),
    );
  }

  allPosts$ = this.store.select('post', 'posts');

  profilePic = 'https://www.w3schools.com/howto/img_avatar.png';
  readonly port = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  subscription: Subscription[] = [];

  allPosts = <PostResponse>{};

  ngOnInit(): void {
    this.subscription.push(
      this.allPosts$.subscribe((posts) => {
        if (posts) {
          console.log(posts);
          this.allPosts = posts;
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  openDialog(): void {
    // this.dialog.open(DialogOverviewExampleDialog);

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '70vw',
      height: '78vh',
      panelClass: 'custom-dialog-container',
      // data: {name: this.name(), port: this.port()},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   if (result !== undefined) {
    //     this.port.set(result);
    //   }
    // });
  }
}

import {Component, inject, model, signal} from '@angular/core';

import {MaterialModule} from "../../../../shared/material.module";
import {PostComponent} from "../../../../components/post/post.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../../components/dialog/dialog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    PostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  profilePic = 'https://www.w3schools.com/howto/img_avatar.png';
  readonly port = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {

    // this.dialog.open(DialogOverviewExampleDialog);

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '70vw',
      height:'75vh',
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

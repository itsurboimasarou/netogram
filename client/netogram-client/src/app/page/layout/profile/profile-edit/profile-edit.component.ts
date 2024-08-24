import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialog} from "@angular/material/dialog";
import {ProfileModel} from "../../../../models/profile.model";
import {StorageState} from "../../../../ngrx/storage/storage.state";
import {Store} from "@ngrx/store";

interface FileInfo {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  previewUrl: string;
}

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent {


  profileForm = new FormGroup({
    avatarPictureInfo: new FormControl<FileInfo | null>(null),
    coverPhotoInfo: new FormControl<FileInfo | null>(null),
    name: new FormControl(''),
    bio: new FormControl(''),
  });

  profileData: ProfileModel = {
    uid: '',
    userName: '',
    email: '',
    avatarUrl: '',
    bio: '',
    coverUrl: '',
  };

  constructor(private dialog: MatDialog,
  private store: Store<{ storage: StorageState }>,
  ) {}

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // this.dialog.closeAll();
    }
  }

  onClose() {
    console.log('Close dialog');
    this.dialog.closeAll();
  }

  changeAvatarPicture() {
    this.changeImage('avatarPictureInfo');
  }

  changeCoverPhoto() {
    this.changeImage('coverPhotoInfo');
  }

  private changeImage(controlName: 'avatarPictureInfo' | 'coverPhotoInfo') {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const fileInfo: FileInfo = {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            previewUrl: e.target.result
          };
          this.profileForm.patchValue({ [controlName]: fileInfo });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  protected readonly FormControl = FormControl;
  protected readonly FormGroup = FormGroup;
}

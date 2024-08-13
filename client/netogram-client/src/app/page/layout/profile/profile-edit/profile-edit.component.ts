import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
    MatMenuModule
  ],
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent {
  profileForm: FormGroup;
  defaultProfilePicture = '';
  defaultCoverPhoto = '';
  profilePictureUrl: string;
  coverPhotoUrl: string;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required], //Required Input
      bio: ['']
    });
    this.profilePictureUrl = this.defaultProfilePicture;
    this.coverPhotoUrl = this.defaultCoverPhoto;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Handle form submission
    }
  }

  onClose() {
  }

  changeProfilePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.profilePictureUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  deleteProfilePicture() {
    this.profilePictureUrl = this.defaultProfilePicture;
  }

  changeCoverPhoto() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.coverPhotoUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  deleteCoverPhoto() {
    this.coverPhotoUrl = this.defaultCoverPhoto;
  }
}

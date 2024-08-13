import {Component, ElementRef, inject, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {MaterialModule} from "../../shared/material.module";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  // readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  // readonly port = model(this.data.port);
  profilePictureUrl: string = 'path/to/default/profile/picture.png';
  defaultProfilePicture: string = 'path/to/default/profile/picture.png';

  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('postTextarea') postTextarea!: ElementRef;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  onNoClick(): void {
    this.dialogRef.close();
  }

  addProfilePicture(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const imageSrc = e.target.result;
          this.insertImageIntoContainer(imageSrc);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  insertImageIntoContainer(imageSrc: string): void {
    const container = this.imageContainer.nativeElement;
    const imgElement = document.createElement('div');
    imgElement.className = 'image-container';
    imgElement.innerHTML = `<img style="width: 100%; object-fit: scale-down" src="${imageSrc}" alt="Selected Image" />`;
    container.appendChild(imgElement);
  }

  onFileSelected($event: Event) {

  }
}

import {Component, ElementRef, inject, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {MaterialModule} from "../../shared/material.module";
import {MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PostModel} from "../../models/post.model";
import {transition} from "@angular/animations";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  startX = 0;
  scrollLeft = 0;

  postForm = new FormGroup(
    {
      uid: new FormControl(''),
      imageUrl: new FormControl(''),
      content: new FormControl(''),
      id: new FormControl('')
    }
  )

  postData: PostModel = {
    uid: '',
    imageUrl: [],
    content: '',
    id: BigInt(0),
  }

  selectedFiles: File[] = [];


  constructor(
    private store: Store<{
      profile: ProfileState
    }>
  ) {

    this.profileMine$.subscribe((profile) => {
      if (profile) {
        console.log('profile', profile);
      }
    });
  }

  profileMine$ = this.store.select('profile', 'mine');
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);


  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('postTextarea') postTextarea!: ElementRef;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  onNoClick(): void {
    this.dialogRef.close();
  }

  public imageCount: number = 0;

  ngAfterViewInit() {

    const container = this.imageContainer.nativeElement;
    container.addEventListener('dragover', this.handleDragOver.bind(this));
    container.addEventListener('drop', this.handleDrop.bind(this));
  }

  initFileInput(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none'; // Hide the input element
    document.body.appendChild(input); // Append to the body or a specific container
    this.fileInput = new ElementRef(input); // Assign to ViewChild reference
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer!.dropEffect = 'copy';
  }

  handleDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer!.files;
    this.processFiles(files);
  }

  addProfilePicture(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    if (this.imageCount < 5) {
      input.multiple = true;
    }
    input.onchange = (event: any) => {
      const files = event.target.files;
      if(this.imageCount + files.length > 5) {
        alert('You can only upload 5 images at a time');
        return;
      }
      this.selectedFiles = Array.from(files);
      this.processFiles(files);
    };
    input.click();
  }

  processFiles(files: FileList): void {
    const filesToProcess = Math.min(files.length, 5 - this.imageCount);
    console.log('Files selected:', files);
    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const imageSrc = e.target.result;
          this.insertImageIntoContainer(imageSrc);
          this.imageCount++;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  insertImageIntoContainer(imageSrc: string): void {
    const container = this.imageContainer.nativeElement;
    const imgElement = document.createElement('div');
    imgElement.innerHTML = `<img style="height: 36vh; object-fit: scale-down" src="${imageSrc}" alt="Selected Image" />`;
    container.appendChild(imgElement);
  }

  delelteAllImages(): void {
    const container = this.imageContainer.nativeElement;
    container.innerHTML = '';
    this.imageCount = 0
  }

  onFileSelected(event: any) {
  }

  prevImage(carousel: HTMLDivElement) {
    const imageWidth = carousel.querySelector('.post-image')?.clientWidth || 0;
    carousel.scrollTo({
      left: carousel.scrollLeft + imageWidth - 100, // 50 is the gap between images
      behavior: 'smooth'
    });   // 10 is the gap between images
  }

  nextImage(carousel: HTMLDivElement) {
    const imageWidth = carousel.querySelector('.post-image')?.clientWidth || 0;
    carousel.scrollTo({
      left: carousel.scrollLeft + imageWidth + 100, // 50 is the gap between images
      behavior: 'smooth'
    });
    // carousel.scrollLeft += imageWidth + 50; // 10 is the gap between images
  }

  onPost() {
    this.profileMine$.subscribe((profile) => {
      this.postData.uid = profile.uid;
    });
    this.postData.content = <string>this.postForm.value.content;
    this.postData.imageUrl = [];
    this.postData.imageUrl = this.selectedFiles;
    console.log('Post Data', this.postData);
    this.dialogRef.close();
  }

  onMouseDown (event: MouseEvent, carousel: HTMLDivElement){
    event.preventDefault();
    this.startX = event.pageX - carousel.offsetLeft;
    this.scrollLeft = carousel.scrollLeft;
  }


}

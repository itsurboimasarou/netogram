import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-warning',
  standalone: true,
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.scss'
})
export class WarningComponent {
  constructor(private dialogRef: MatDialogRef<WarningComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}

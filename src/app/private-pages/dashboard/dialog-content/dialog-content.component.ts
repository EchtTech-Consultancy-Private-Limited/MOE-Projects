import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [MatCardModule,  MatTableModule,  MatDialogModule, FontAwesomeModule],
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  faTimes = faTimes;
  constructor(public dialogRef: MatDialogRef<DialogContentComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
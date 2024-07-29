import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-block-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatCardModule,  MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDialogModule, FontAwesomeModule],
  templateUrl: './block-dashboard.component.html',
  styleUrls: ['./block-dashboard.component.scss'] // fix: styleUrl -> styleUrls
})
export class BlockDashboardComponent {
 
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { exampleData: 'This is some data to pass'  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
    });
  }


  faCoffee = faCoffee;
}
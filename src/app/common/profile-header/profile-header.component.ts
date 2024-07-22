import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule],
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'] 
})
export class ProfileHeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // Method to toggle the sidenav
  toggleSidenav() {
    this.sidenav.toggle();
}
}

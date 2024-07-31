import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MyProfile2Component } from './private-pages/dashboard/my-profile2/my-profile2.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProfileHeaderComponent } from './common/profile-header/profile-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MyProfile2Component,
    ProfileHeaderComponent,
    CommonModule // Include CommonModule for directives like *ngIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Fix styleUrls property name
})
export class AppComponent implements OnInit { // Implement OnInit
  title = 'MOE-UD';
  isLoginPage: boolean = false; // Initialize to false

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
      }
    });
  }
}

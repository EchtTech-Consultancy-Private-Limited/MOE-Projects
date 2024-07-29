import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MyProfile2Component } from './private-pages/dashboard/my-profile2/my-profile2.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProfileHeaderComponent } from './common/profile-header/profile-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MyProfile2Component, ProfileHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MOE-UD';
}

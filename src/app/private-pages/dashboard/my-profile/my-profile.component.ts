import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ProfileHeaderComponent } from '../../../common/profile-header/profile-header.component';
import { RouterLink } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatSelectModule, ProfileHeaderComponent, RouterLink, MatRadioModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ProfileHeaderComponent } from '../../../common/profile-header/profile-header.component';
import { RouterLink } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-my-profile2',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatSelectModule, ProfileHeaderComponent, RouterLink, MatRadioModule],
  templateUrl: './my-profile2.component.html',
  styleUrl: './my-profile2.component.scss'
})
export class MyProfile2Component {

}

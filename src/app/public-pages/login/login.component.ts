import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../../common/header/header.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, MatGridListModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule, MatLabel , MatButtonModule, MatCardModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {}

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard-school',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatCardModule, MatButtonModule,  MatTableModule, MatPaginatorModule, MatPaginator, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './dashboard-school.component.html',
  styleUrl: './dashboard-school.component.scss'
})
export class DashboardSchoolComponent {
  selectedLanguage = 'en';
}

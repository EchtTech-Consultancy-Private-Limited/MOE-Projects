import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard-school',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatCardModule, MatButtonModule,  MatTableModule, MatPaginatorModule, MatPaginator, ],
  templateUrl: './dashboard-school.component.html',
  styleUrl: './dashboard-school.component.scss'
})
export class DashboardSchoolComponent {

}

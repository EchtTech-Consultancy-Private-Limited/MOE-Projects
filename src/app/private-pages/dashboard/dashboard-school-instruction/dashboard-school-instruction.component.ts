import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-school-instruction',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatCardModule],
  templateUrl: './dashboard-school-instruction.component.html',
  styleUrl: './dashboard-school-instruction.component.scss'
})
export class DashboardSchoolInstructionComponent {

}

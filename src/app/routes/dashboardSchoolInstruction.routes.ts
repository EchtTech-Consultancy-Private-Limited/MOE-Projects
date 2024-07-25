import { Routes } from '@angular/router';

export const dashboardSchoolInstruction: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/dashboard-school-instruction/dashboard-school-instruction.component').then(
        (comp) => comp.DashboardSchoolInstructionComponent
      ),
  },
];

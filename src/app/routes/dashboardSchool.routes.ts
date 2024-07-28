import { Routes } from '@angular/router';

export const dashboardSchool: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/dashboard-school/dashboard-school.component').then(
        (comp) => comp.DashboardSchoolComponent
      ),
  },
];

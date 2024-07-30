import { Routes } from '@angular/router';

export const dashboardSchoolwise: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/dashboard-schoolwise/dashboard-schoolwise.component').then(
        (comp) => comp.DashboardSchoolwiseComponent
      ),
  },
];

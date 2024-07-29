import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/dashboard.component').then(
        (comp) => comp.DashboardComponent
      ),
  },
];

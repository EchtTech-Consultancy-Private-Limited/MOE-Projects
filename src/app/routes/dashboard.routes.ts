import { Routes } from '@angular/router';
import { myProfileChildRoutes } from './my-profile-child.routes';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/dashboard.component').then(
        (comp) => comp.DashboardComponent
      ),
  },
];

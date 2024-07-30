import { Routes } from '@angular/router';

export const blockDashboard: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/block-dashboard/block-dashboard.component').then(
        (comp) => comp.BlockDashboardComponent
      ),
  },
];

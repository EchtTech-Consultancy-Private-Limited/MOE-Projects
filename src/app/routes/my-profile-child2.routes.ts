import { Routes } from '@angular/router';

export const myProfileChil2dRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/my-profile2/my-profile2.component').then(
        (comp) => comp.MyProfile2Component
      ),
  },
];

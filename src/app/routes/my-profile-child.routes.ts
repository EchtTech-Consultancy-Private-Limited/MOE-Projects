import { Routes } from '@angular/router';

export const myProfileChildRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../private-pages/dashboard/my-profile/my-profile.component').then(
        (comp) => comp.MyProfileComponent
      ),
  },
];

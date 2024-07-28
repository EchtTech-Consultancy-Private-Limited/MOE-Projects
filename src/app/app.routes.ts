import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./public-pages/login/login.component').then(
        (comp) => comp.LoginComponent
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./routes/dashboard.routes').then(
        (route) => route.dashboardRoutes
      ),
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./routes/my-profile-child.routes').then(
        (route) => route.myProfileChildRoutes
      ),
    // children: myProfileChildRoutes,
  },
  {
    path: 'my-profile2',
    loadChildren: () =>
      import('./routes/my-profile-child2.routes').then(
        (route) => route.myProfileChil2dRoutes
      ),
    // children: myProfileChildRoutes,
  },
  {
    path: 'dashboardSchoolInstruction',
    loadChildren: () =>
      import('./routes/dashboardSchoolInstruction.routes').then(
        (route) => route.dashboardSchoolInstruction
      ),
    // children: myProfileChildRoutes,
  },
  {
    path: 'dashboardSchool',
    loadChildren: () =>
      import('./routes/dashboardSchool.routes').then(
        (route) => route.dashboardSchool
      ),
    // children: myProfileChildRoutes,
  },

  { path: '**', redirectTo: '/login' },
];

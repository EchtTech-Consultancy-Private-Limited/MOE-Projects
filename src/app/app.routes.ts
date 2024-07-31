import { Routes } from '@angular/router';
import { loginGuardGuard } from './Guards/login-guard.guard';

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
      canActivate: [loginGuardGuard],
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./routes/my-profile-child.routes').then(
        (route) => route.myProfileChildRoutes
      ),
    // children: myProfileChildRoutes,
    canActivate: [loginGuardGuard],
  },
  {
    path: 'my-profile2',
    loadChildren: () =>
      import('./routes/my-profile-child2.routes').then(
        (route) => route.myProfileChil2dRoutes
      ),
    // children: myProfileChildRoutes,
    canActivate: [loginGuardGuard],
  },
  {
    path: 'dashboardSchoolInstruction',
    loadChildren: () =>
      import('./routes/dashboardSchoolInstruction.routes').then(
        (route) => route.dashboardSchoolInstruction
      ),
    // children: myProfileChildRoutes,
    canActivate: [loginGuardGuard],
  },
  {
    path: 'dashboardSchool',
    loadChildren: () =>
      import('./routes/dashboardSchool.routes').then(
        (route) => route.dashboardSchool
      ),
    // children: myProfileChildRoutes,
    canActivate: [loginGuardGuard],
  },
  {
    path: 'blockDashboard',
    loadChildren: () =>
      import('./routes/blockDashboard.routes').then(
        (route) => route.blockDashboard
      ),
    // children: myProfileChildRoutes,
    canActivate: [loginGuardGuard],
  },
  {
    path: 'dashboardSchoolwise',
    loadChildren: () =>
      import('./routes/dashboardSchoolwise.routes').then(
        (route) => route.dashboardSchoolwise
      ),
    // children: myProfileChildRoutes,
    canActivate: [loginGuardGuard],
  },

  { path: '**', redirectTo: '/login' },
];

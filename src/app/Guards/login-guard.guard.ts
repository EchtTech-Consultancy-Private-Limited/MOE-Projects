import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AlertServiceService } from '../common/aleart.service';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const _alert = inject(AlertServiceService);
  // let isToken = sessionStorage.getItem('token');
  let isToken = ''

  if (isToken == '' || isToken == null || isToken == undefined) {
    // _alert.swalPopErrorTimer('Not Authorised !! Redirecting Back to Login Page ');
    _router.navigate(['/login']);
    return false;
  }
  return true;
};

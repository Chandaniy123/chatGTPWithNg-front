import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('userId') != null){
    return true;
  }
  else
  return false;
};

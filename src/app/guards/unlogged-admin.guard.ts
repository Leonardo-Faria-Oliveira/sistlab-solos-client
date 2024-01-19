import { CanActivateFn, Router } from '@angular/router';

export const unloggedAdminGuard: CanActivateFn = (route, state) => {
  
  
  const router = new Router()
  const isUserLogged = localStorage.getItem("logginUserToken") === null ? false : true

  if(isUserLogged){

    router.navigate(['dashboard']);
    return false
    

  }
  return true


  
  
};

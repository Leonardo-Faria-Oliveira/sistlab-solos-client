import { CanActivateFn, Router } from '@angular/router';

export const unloggedUserGuard: CanActivateFn = (route, state) => {
  
  
  const router = new Router()
  const isUserLogged = localStorage.getItem("loggedUserToken") === null ? false : true

  if(isUserLogged){

    router.navigate(['dashboard']);
    return false
    

  }
  return true


  
  
};

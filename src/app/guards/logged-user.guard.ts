import { CanActivateFn, Router } from '@angular/router';

export const loggedUserGuard: CanActivateFn = (route, state) => {
  
  
  const router = new Router()
  const isUserLogged = localStorage.getItem("logginUserToken") === null ? false : true
  const loginPath = localStorage.getItem("loginPath")

  if(isUserLogged){

    
    return true;
    

  }
  router.navigate([loginPath])
  return true


  
  
};

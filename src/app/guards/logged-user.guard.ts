import { CanActivateFn, Router } from '@angular/router';

export const loggedUserGuard: CanActivateFn = (route, state) => {
  
  
  const router = new Router()
  const isUserLogged = localStorage.getItem("loggedUserToken") === null ? false : true
  const loginPath = localStorage.getItem("loginPath")

  if(isUserLogged){

    
    return true;
    

  }
  router.navigateByUrl(loginPath!)
  return false


  
  
};

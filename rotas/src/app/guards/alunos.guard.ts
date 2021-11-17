import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AlunosGuard implements CanActivateChild{

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | boolean {

        //console.log(route);
        //console.log(state);

        console.log('AlunosGuard: Guarda de rota filha');

        if (state.url.includes('editar')) {
            //alert('Usuario sem acesso');
            //return false;
        }

        return true;
    }
}
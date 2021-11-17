import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class CursosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : boolean {
        console.log('guarda de rota filha com curso');
        return true;
    }

}
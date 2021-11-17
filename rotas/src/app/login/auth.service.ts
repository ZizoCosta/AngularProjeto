import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//import { EventEmitter } from 'stream';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 usuarioAutenticado: boolean = false;

 mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  acessoLogin(usuario: Usuario) {
    if(usuario.nome === "teste" && usuario.senha === "teste12") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  } 

}

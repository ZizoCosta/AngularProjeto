import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

//import { AlunosComponent } from './alunos/alunos.component';

//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent//,
    //AlunosComponent,
    //CursosComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, 
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number = 0;
  aluno: any;
  inscricao: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alunosService: AlunosService) { }

  ngOnInit(): void {

    console.log('ngOnInit: AlunoDetalheComponent');
    /* this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    ); */

    this.inscricao = this.route.data.subscribe(
      (info) => {
       console.log('Recebendo o obj aluno do resolver ');
       this.aluno = info.aluno;
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }

}

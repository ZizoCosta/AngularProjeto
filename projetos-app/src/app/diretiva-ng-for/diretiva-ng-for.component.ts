import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.css']
})
export class DiretivaNgForComponent implements OnInit {

  cursos: string[] = ["Angular", "Java", "Asp.net MVC C#"];

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    for (let i=0; i< this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

}

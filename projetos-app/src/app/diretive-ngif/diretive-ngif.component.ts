import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretive-ngif',
  templateUrl: './diretive-ngif.component.html',
  styleUrls: ['./diretive-ngif.component.css']
})
export class DiretiveNgifComponent implements OnInit {

  cursos: string[] = ["Angular"];

  mostrarCursos: boolean = false;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}

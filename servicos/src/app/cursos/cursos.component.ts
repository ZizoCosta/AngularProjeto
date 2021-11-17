import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']//,
  //providers: [CursosService]
})
export class CursosComponent implements OnInit {

  /* cursos: string[] = ['Javascript','Angular','Json', 'Java']; */
  cursos: string[] = [];
  cursosService: CursosService;

/*   constructor() {
    //this.cursosService = new CursosService();
   } 
   OR
   */

  /* constructor(private cursosService: CursosService) {
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
   } 
   OR
   */

   constructor(_cursosService: CursosService) {
    //this.cursosService = new CursosService();
    this.cursosService = _cursosService;
   }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      //curso => console.log(curso)
      curso => this.cursos.push(curso)
    );

/*    this.cursosService.emitirCursoCriado.subscribe(
      curso => console.log(curso)

      // function(curso){
      //  console.log(curso);
      //} 

    );*/
  }

}

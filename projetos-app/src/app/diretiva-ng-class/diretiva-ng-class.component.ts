import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.css']
})
export class DiretivaNgClassComponent implements OnInit {

  vcontador: number = 0;

  onclickContador() {

    this.vcontador++;

  }

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}

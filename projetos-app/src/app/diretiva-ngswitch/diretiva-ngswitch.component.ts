import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  aba: string = "Home";

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { }

}

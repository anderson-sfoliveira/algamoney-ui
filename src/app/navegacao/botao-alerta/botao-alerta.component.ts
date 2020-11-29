import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-alerta',
  templateUrl: './botao-alerta.component.html',
  styleUrls: ['./botao-alerta.component.css']
})
export class BotaoAlertaComponent implements OnInit {

  @Input() label;

  constructor() { }

  ngOnInit(): void {
  }

}

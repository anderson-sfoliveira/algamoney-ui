import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-botao-alerta',
  templateUrl: './botao-alerta.component.html',
  styleUrls: ['./botao-alerta.component.css']
})
export class BotaoAlertaComponent implements OnInit {

  @Input() label;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}

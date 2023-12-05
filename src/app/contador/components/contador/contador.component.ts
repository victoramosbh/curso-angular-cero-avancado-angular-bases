import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Contador: {{contador}}</h1>
    <button (click)="contar(-1)">-1</button>
    <button (click)="resetar()">Resetar</button>
    <button (click)="contar(1)">+1</button>

  `
})

export class ContadorComponent {
  public contador:number = 0;

  public contar(valor:number):void{
    this.contador += valor;
  }

  public resetar():void{
    this.contador = 0;
  }


}

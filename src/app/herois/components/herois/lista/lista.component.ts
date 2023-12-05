import { Component } from '@angular/core';

@Component({
  selector: 'app-herois-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public nomesHerois: string[] = ['Spider Man','Capitão America','Thor','Hulk']
  public heroiDeletado?: string;

  public apagarUltimoHeroi():void{
    this.heroiDeletado = this.nomesHerois.pop();
  }
}

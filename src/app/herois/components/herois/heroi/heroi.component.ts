import { Component } from '@angular/core';

@Component({
  selector: 'app-herois-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent {

  public nome:string = 'iron Man';
  public edad:number = 47;

  get capitalizarNome():string{
    return this.nome.toUpperCase();
  }

  public getHeroiDescricao():string{
    return `${this.nome} - ${this.edad}`;
  }

  public cambiarHeroi():void{
    this.nome = "Super Man"
  }

  public cambiarEdad(): void{
    this.edad = 38;
  }

}

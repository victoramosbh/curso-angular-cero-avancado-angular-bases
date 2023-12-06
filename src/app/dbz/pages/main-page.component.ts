import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }


  //o get quer dizer que é uma propiedade
  public get personajes(): Personaje[] {
    //os ... serve para clonar o objeto
    return [...this.dbzService.personajes];
  }

  public removerPersonajeById(id: string): void {
    this.dbzService.removerPersonajeById(id);
  }

  public onAddPersonaje(personaje: Personaje): void {
    this.dbzService.onAddPersonaje(personaje);
  }

}

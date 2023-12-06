import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public personajes: Personaje[] = [{
    id: uuid(),
    nombre: 'Krillin',
    poder: 1000
  },
  {
    id: uuid(),
    nombre: 'Goku',
    poder: 9500
  },
  {
    id: uuid(),
    nombre: 'Vegetta',
    poder: 7500
  }];

  public onAddPersonaje(personaje: Personaje):void{
    personaje.id = uuid();
    this.personajes.push(personaje);
  }

  public removerPersonaje(index: number):void{
    this.personajes.splice(index,1);
  }

  public removerPersonajeById(id: string):void{
    this.personajes =  this.personajes.filter(per => per.id !== id);
  }

}

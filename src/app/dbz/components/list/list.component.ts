import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Input()
  public listaPersonajes: Personaje[] = [{nombre: 'Trunks',poder: 10}];

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  public deletarPersonaje(id?: string):void{

    if(!id) return;

    this.onDeletePersonaje.emit(id);
  }
}

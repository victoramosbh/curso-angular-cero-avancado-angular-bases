import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {nombre: '', poder: 0};

  public emitPersonaje():void{

    if (this.personaje.nombre.length === 0) return;
    if(this.personaje.poder <= 0) return;

    this.onNewPersonaje.emit(this.personaje);

    this.personaje = {nombre: '', poder: 0};
  }
}

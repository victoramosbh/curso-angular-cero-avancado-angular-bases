import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroiComponent } from './components/herois/heroi/heroi.component'
import { ListaComponent } from './components/herois/lista/lista.component';



@NgModule({
  declarations:[
    HeroiComponent,
    ListaComponent
  ],
  exports:[
    HeroiComponent,
    ListaComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroisModule{}

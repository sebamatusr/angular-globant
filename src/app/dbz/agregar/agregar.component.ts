import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output()
  onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  @Input()
  agregar() {
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.onNewCharacter.emit(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  
}

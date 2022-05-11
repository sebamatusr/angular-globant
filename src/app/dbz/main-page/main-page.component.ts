import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzSerivce } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  /**
   *
   */
  personajes: Personaje[];
  errorMessage = "";

  constructor(private dbzService: DbzSerivce) {
    this.personajes = [];
  }
  
  ngOnInit(): void {
    this.dbzService.getPersonajes()
    .subscribe({
      next : data => {
        this.personajes = [ ...data ];
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.message;
      }
    })
  }
 
  nuevo: Personaje = {
    nombre: 'Uranai Baba',
    poder: 1200000
  }

  agregarNuevoPersonaje(arg: Personaje): void {

    this.personajes.push(arg);
    
  }
}

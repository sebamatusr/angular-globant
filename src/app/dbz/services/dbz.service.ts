import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, OperatorFunction, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzSerivce {
    /**
     *
     */
    constructor(private http: HttpClient) {
        console.log('Servicio Inicializado');
        
    }

    getPersonajes(): Observable<Personaje[]> {
        return this.http.get<Personaje[]>("http://localhost:3100/api/personajes")
        .pipe(catchError(this.handleError<Personaje[]>('getPersonaje', [])));
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        
            this.log(`${operation} failed: ${error.message}`);
        
            return throwError(() => error);
            //return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
    }
}
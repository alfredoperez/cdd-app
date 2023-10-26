import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  private heroesUrl = '/api/heroes'; // URL to web api
  private $heros: Subject<Hero[]> = new Subject();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getHeroes(): Observable<Hero[]> {
    this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])))
      .subscribe((heroes) => this.$heros.next(heroes));
    return this.$heros;
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get<Hero>(url)
      .pipe(catchError(this.handleError<Hero>(`getHero id=${id}`)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

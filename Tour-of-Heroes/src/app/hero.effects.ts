import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap} from 'rxjs/operators';
import { HeroService } from "./hero.service";

@Injectable()
export class HeroEffects {

  loadHeroes$ = createEffect(() => {
      return this.actions$.pipe(
        ofType('[Heroes Page] Load Heroes'),
        mergeMap(() => this.heroService.getHeroes()
          .pipe(
            tap(_ => console.log('fetched heroes')),
            catchError(() => EMPTY)
          ))
      );
    }
  );

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) {}
}

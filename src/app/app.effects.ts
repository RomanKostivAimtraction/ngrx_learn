import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { changeUpdatedAt, minus, plus, reset } from './reducers/counter';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) { }

  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(minus, plus, reset),
    map(() => changeUpdatedAt({ updatedAt: Date.now() }))
  ))
}

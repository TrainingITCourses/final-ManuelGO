import { CommonService } from 'src/app/common.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { StatusActionTypes, StatusesLoaded, StatusesNotLoaded } from './status.actions';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class StatusEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(StatusActionTypes.LoadStatuses)
    .pipe(
      mergeMap(() =>
        this.commonService
          .getStatusTypes$()
          .pipe(map(statuses => new StatusesLoaded(statuses)),
          catchError(err => of(new StatusesNotLoaded(err.message))))
      )
    );

  constructor(private actions$: Actions, private commonService: CommonService) {}
}

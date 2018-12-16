import { CommonService } from 'src/app/common.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LaunchActionTypes, LaunchesLoaded, LaunchesNotLoaded } from './launch.actions';
import { of } from 'rxjs';

@Injectable()
export class LaunchEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunches)
    .pipe(
      mergeMap(() =>
        this.commonService
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches),
          catchError(err => of(new LaunchesNotLoaded(err.message)))))
      )
    );

  constructor(private actions$: Actions, private commonService: CommonService) {}
}

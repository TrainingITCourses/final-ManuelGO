import { CommonService } from 'src/app/common.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AgencyActionTypes, AgenciesLoaded, AgenciesNotLoaded } from './agency.actions';
import { of } from 'rxjs';

@Injectable()
export class AgencyEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(AgencyActionTypes.LoadAgencies)
    .pipe(
      mergeMap(() =>
        this.commonService
          .getAgencies$()
          .pipe(map(agencies => new AgenciesLoaded(agencies),
          catchError(err => of(new AgenciesNotLoaded(err.message)))))
      )
    );

  constructor(private actions$: Actions, private commonService: CommonService) {}
}

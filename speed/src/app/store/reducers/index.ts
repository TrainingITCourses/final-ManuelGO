import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromStatus from './status/status.reducer';
import * as fromLaunch from './launch/launch.reducer';
import * as fromAgency from './agency/agency.reducer';
import * as fromType from './type/type.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  status: fromStatus.StatusState;
  launch: fromLaunch.LaunchesState;
  agency: fromAgency.AgencyState;
  type: fromType.State;
  router: any;
}

export const reducers: ActionReducerMap<State> = {
  status: fromStatus.reducer,
  launch: fromLaunch.reducer,
  agency: fromAgency.reducer,
  type: fromType.reducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { Action } from '@ngrx/store';

export enum AgencyActionTypes {
  LoadAgencies = '[Agency] Load Agencies',
  AgenciesLoaded = '[Agency] Agencies loaded',
  AgenciesNotLoaded = '[Agency] Agencies not loaded'
}

export class LoadAgencies implements Action {
  readonly type = AgencyActionTypes.LoadAgencies;
}
export class AgenciesNotLoaded implements Action {
  readonly type = AgencyActionTypes.AgenciesNotLoaded;
  constructor(readonly message: string) {}
}

export class AgenciesLoaded implements Action {
  readonly type = AgencyActionTypes.AgenciesLoaded;
  constructor(readonly payload: any[]) {}
}

export type AgencyActions = LoadAgencies | AgenciesLoaded | AgenciesNotLoaded;

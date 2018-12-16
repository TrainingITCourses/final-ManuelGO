import { Launch } from './../../models/launch';
import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load Launches',
  LaunchesLoaded = '[Launch] Launches Loaded',
  LaunchesNotLoaded = '[Launch] Launches not loaded'
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}
export class LaunchesLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesLoaded;
  constructor(readonly payload: Launch[]) {}
}
export class LaunchesNotLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesNotLoaded;
  constructor(readonly message: string) {}
}

export type LaunchActions = LoadLaunches | LaunchesLoaded | LaunchesNotLoaded;

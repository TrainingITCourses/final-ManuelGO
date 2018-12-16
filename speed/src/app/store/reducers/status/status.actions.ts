import { Action } from '@ngrx/store';
import { Status } from '../../models/status';

export enum StatusActionTypes {
  LoadStatuses = '[Status] Load Statuses',
  StatusesLoaded = '[Status] Statuses loaded',
  StatusesNotLoaded = '[Status] Statuses not loaded'
}

export class LoadStatuses implements Action {
  readonly type = StatusActionTypes.LoadStatuses;
}
export class StatusesNotLoaded implements Action {
  readonly type = StatusActionTypes.StatusesNotLoaded;
  constructor(readonly message: string) {}
}
export class StatusesLoaded implements Action {
  readonly type = StatusActionTypes.StatusesLoaded;
  constructor(readonly payload: Status[]) {}
}

export type StatusActions = LoadStatuses | StatusesLoaded | StatusesNotLoaded;

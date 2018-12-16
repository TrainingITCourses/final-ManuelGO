import { Action } from '@ngrx/store';

export enum TypeActionTypes {
  LoadTypes = '[Type] Load Types'
}

export class LoadTypes implements Action {
  readonly type = TypeActionTypes.LoadTypes;
}

export type TypeActions = LoadTypes;

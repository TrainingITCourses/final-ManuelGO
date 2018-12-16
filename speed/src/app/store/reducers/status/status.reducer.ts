import { StatusActionTypes, StatusActions } from './status.actions';
import { Status } from '../../models/status';

export interface StatusState {
  statuses: Status[];
  message?: string;
}

export const initialState: StatusState = {
  statuses: [],
  message: '',
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
  return { ...state };
  case StatusActionTypes.StatusesLoaded:
    return {  statuses: action.payload };
  case StatusActionTypes.StatusesNotLoaded:
    return {  ...state, message: action.message };
  default:
    return state;
}
}

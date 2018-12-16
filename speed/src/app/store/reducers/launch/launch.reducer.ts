import { Launch } from './../../models/launch';
import { LaunchActions, LaunchActionTypes } from './launch.actions';

export interface LaunchesState {
  launches: Launch[];
  message?: string;
}

export const initialState: LaunchesState = {
  launches: [],
  message: ''
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state, };
    case LaunchActionTypes.LaunchesNotLoaded:
      return {...state, message: action.message};
    case LaunchActionTypes.LaunchesLoaded:
      return { launches: action.payload };
    default:
      return state;
  }
}

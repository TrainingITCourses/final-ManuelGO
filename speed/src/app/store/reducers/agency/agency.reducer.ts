import { Agency } from './../../models/agency';
import { AgencyActionTypes, AgencyActions } from './agency.actions';

export interface AgencyState {
  agencies: Agency[];
  message?: string;
}

export const initialState: AgencyState = {
  agencies: [],
  message: '',
};

export function reducer(state = initialState, action: AgencyActions): AgencyState {
  switch (action.type) {
    case AgencyActionTypes.LoadAgencies:
      return { ...state };
    case AgencyActionTypes.AgenciesNotLoaded:
      return {...state, message: action.message};
    case AgencyActionTypes.AgenciesLoaded:
      return {  agencies: action.payload };
    default:
      return state;
  }
}

import {
  INVENTORY_REPORT_FETCH_SUCCESS,
  INFECTED_REPORT_FETCH_SUCCESS,
  INFECTED_POINTS_REPORT_FETCH_SUCCESS,
  NONINFECTED_REPORT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  infected: {},
  nonInfected: {},
  inventory: {},
  infectedPoints: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INFECTED_REPORT_FETCH_SUCCESS:
      return { ...state, infected: action.payload.report};

    case NONINFECTED_REPORT_FETCH_SUCCESS:
      return { ...state, nonInfected: action.payload.report };

    case INFECTED_POINTS_REPORT_FETCH_SUCCESS:
      return { ...state, infectedPoints: action.payload.report };

    case INVENTORY_REPORT_FETCH_SUCCESS:
      return { ...state, inventory: action.payload.report };

    default:
      return state;
  }
}

import {
  SURVIVOR_FLAG_INFECTED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SURVIVOR_FLAG_INFECTED_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;

  }
}

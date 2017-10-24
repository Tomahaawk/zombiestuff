import {
  SURVIVOR_FETCH_SUCCESS,
  SINGLE_SURVIVOR_FETCH_SUCCESS

} from '../actions/types';

const INITIAL_STATE = {
  singleSurvivor: {},
  survivorsList: {}
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case SURVIVOR_FETCH_SUCCESS:
      return { ...state, survivorsList: action.payload };

    case SINGLE_SURVIVOR_FETCH_SUCCESS:
      return { ...state, singleSurvivor: action.payload };
    default:
      return state;
  }
};

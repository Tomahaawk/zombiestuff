import {
  LATLON_CHANGED,
  LATLON_RESET
} from '../actions/types';

const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
  manualChange: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LATLON_CHANGED:
      return { ...state, latitude: action.payload.latitude, longitude: action.payload.longitude, manualChange: true };

    case LATLON_RESET:
      return {...state, ...INITIAL_STATE, manualChange: false}

    default:
      return state;

  }
};

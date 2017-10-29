import {
  LATLON_CHANGED
} from './types';

export const latlonChanged = ({latitude, longitude}) => {
  return {
    type: LATLON_CHANGED,
    payload: {latitude, longitude}
  };
};

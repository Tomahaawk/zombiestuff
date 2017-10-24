import {
  SURVIVOR_CREATE,
  SURVIVOR_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  age: '',
  gender: '',
  lonlat: '',
  items: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case SURVIVOR_CREATE:
      return INITIAL_STATE;

    case SURVIVOR_UPDATE:
      console.log(action);
      return { ...state, [action.payload.prop]: action.payload.value };

    default:
      return state;
  }
};

//name, age, gender, last location (latitude, longitude) and inventory.

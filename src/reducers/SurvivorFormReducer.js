import {
  SURVIVOR_CREATE,
  SURVIVOR_UPDATE,
  SURVIVOR_CREATE_FAIL,
  SURVIVOR_EDIT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  age: '',
  gender: '',
  items: '',
  response: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case SURVIVOR_CREATE:
      return {INITIAL_STATE, response: action.payload, error:''};

    case SURVIVOR_UPDATE:
      console.log(action);
      return { ...state, [action.payload.prop]: action.payload.value };

    case SURVIVOR_CREATE_FAIL:
      return { ...state, error: 'Error registering survivor'}

    case SURVIVOR_EDIT_SUCCESS:
      return { state, response: action.payload, error: ''};

    default:
      return state;
  }
};

//name, age, gender, last location (latitude, longitude) and inventory.

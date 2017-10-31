import {
  SURVIVOR_CREATE,
  SURVIVOR_UPDATE,
  SURVIVOR_CREATE_FAIL,
  SURVIVOR_EDIT_SUCCESS,
  SURVIVOR_EDIT_FAIL,
  SURVIVOR_ERROR_RESET
} from '../actions/types';

const INITIAL_STATE = {

  response: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case SURVIVOR_CREATE:
      return {state, response: action.payload, error:''};

    case SURVIVOR_UPDATE:
      console.log(action);
      return { ...state, [action.payload.prop]: action.payload.value };

    case SURVIVOR_CREATE_FAIL:
      return { ...state, error: 'Error registering survivor'};

    case SURVIVOR_EDIT_SUCCESS:
      return { state, response: action.payload, error: ''};

    case SURVIVOR_EDIT_FAIL:
      return { ...state, error: 'Error saving changes' };

    case SURVIVOR_ERROR_RESET:
      return { state, error: '', response: null };
    default:
      return state;
  }
};

//name, age, gender, last location (latitude, longitude) and inventory.

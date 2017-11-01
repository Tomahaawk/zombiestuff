import { INVENTORY_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  survivorInventory: {}
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
      case INVENTORY_FETCH_SUCCESS:
        return { ...state, survivorInventory: action.payload };

      default:
        return state;
  }
};

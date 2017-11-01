import axios from 'axios';
import { INVENTORY_FETCH_SUCCESS } from './types';

export const inventoryFetch = (survivorId) => {
  return(dispatch) => {
    axios.get(`http://zssn-backend-example.herokuapp.com/api/people/${survivorId}/properties.json`)
      .then(response => {
        console.log(response);
        dispatch({ type: INVENTORY_FETCH_SUCCESS, payload: response.data })
      });
  }
}

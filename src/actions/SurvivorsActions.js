import axios from 'axios';
import {
  SURVIVOR_FETCH_SUCCESS,
  SINGLE_SURVIVOR_FETCH_SUCCESS,
  SURVIVOR_CREATE,
  SURVIVOR_CREATE_FAIL,
  SURVIVOR_UPDATE,
  SURVIVOR_FLAG_INFECTED_SUCCESS,
  SURVIVOR_EDIT_SUCCESS,
  SURVIVOR_EDIT_FAIL,
  LATLON_RESET,
  SURVIVOR_ERROR_RESET
 } from './types';

export const survivorsFetch = () => {
  return(dispatch) => {
    axios.get('http://zssn-backend-example.herokuapp.com/api/people.json')
      .then(response => {
        console.log(response);
        dispatch({ type: SURVIVOR_FETCH_SUCCESS, payload: response.data })
      });
  };
};

export const singleSurvivorFetch = ({location}) => {
  return(dispatch) => {
    axios.get(location)
      .then(response => {
        console.log(response);
        dispatch({ type: SINGLE_SURVIVOR_FETCH_SUCCESS, payload: response.data })
      });
  };
};

export const reportInfected = ({infectedId, flaggerId}) => {
  return(dispatch) => {
    axios.post(`http://zssn-backend-example.herokuapp.com/api/people/${flaggerId}/report_infection.json`,
    {
      "infected": infectedId
    })
    .then((response) => {
      console.log(response);
      dispatch({ type: SURVIVOR_FLAG_INFECTED_SUCCESS })
    });
  }
}

export const survivorEdit = ({ id, name, age, gender, latitude, longitude }) => {
  return(dispatch) => {
    axios.patch(`http://zssn-backend-example.herokuapp.com/api/people/${id}.json`,
    {
      "name": name,
      "age": age,
      "gender": gender,
      "lonlat": `point(${latitude} ${longitude})`
    })
    .then((response) => {
      console.log(response);
      dispatch({ type: SURVIVOR_EDIT_SUCCESS, payload: response.status });
    })
    .catch((error) => {
      console.log(error);
      editSurvivorFail(dispatch);
    })
  }
}

export const survivorCreate = ({ name, age, gender, items, latitude, longitude }) => {
  return(dispatch) => {
    axios.post('http://zssn-backend-example.herokuapp.com/api/people.json',
      {
        "name": name,
        "age": age,
        "gender": gender,
        "lonlat": `point(${latitude} ${longitude})`,
        "items": items
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: SURVIVOR_CREATE, payload: response.status })
      })
      .catch((error) =>{
        console.log(error);
        createSurvivorFail(dispatch);
      });
  }
};

const createSurvivorFail = (dispatch) => {
  dispatch({
    type: SURVIVOR_CREATE_FAIL
  })
};

const editSurvivorFail = (dispatch) => {
  dispatch({
    type: SURVIVOR_EDIT_FAIL
  })
};

export const survivorUpdate = ({ prop, value }) => {
  return {
    type: SURVIVOR_UPDATE,
    payload: { prop, value }
  };
};

export const resetLatlon = () => {
  return{
    type: LATLON_RESET
  }
}

export const resetErrorMessage = () => {
  return {
    type: SURVIVOR_ERROR_RESET
  }
}

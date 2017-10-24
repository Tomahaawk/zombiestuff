import axios from 'axios';
import {
  SURVIVOR_FETCH_SUCCESS,
  SINGLE_SURVIVOR_FETCH_SUCCESS,
  SURVIVOR_CREATE,
  SURVIVOR_UPDATE,
  SURVIVOR_FLAG_INFECTED_SUCCESS
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


export const survivorCreate = ({ name, age, gender, items }) => {
  return(dispatch) => {
    axios.post('http://zssn-backend-example.herokuapp.com/api/people.json',
      {
        "name": name,
        "age": age,
        "gender": gender,
        "lonlat": null,
        "items": items
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: SURVIVOR_CREATE })
      });
  }
};

export const survivorUpdate = ({ prop, value }) => {
  return {
    type: SURVIVOR_UPDATE,
    payload: { prop, value }
  };
};

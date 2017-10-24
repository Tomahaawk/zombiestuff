import axios from 'axios';
import {
  INVENTORY_REPORT_FETCH_SUCCESS,
  INFECTED_REPORT_FETCH_SUCCESS,
  INFECTED_POINTS_REPORT_FETCH_SUCCESS,
  NONINFECTED_REPORT_FETCH_SUCCESS
} from './types';

export const nonInfectedReportFetch = () => {
  return(dispatch) => {
      axios.get('http://zssn-backend-example.herokuapp.com/api/report/non_infected.json')
        .then(response => {
          dispatch({ type: NONINFECTED_REPORT_FETCH_SUCCESS, payload: response.data })
        });
  };
};

export const infectedReportFetch = () => {
  return(dispatch) => {
    axios.get('http://zssn-backend-example.herokuapp.com/api/report/infected.json')
      .then(response => {
        dispatch({ type: INFECTED_REPORT_FETCH_SUCCESS, payload: response.data })
      });
  };
};

export const infectedPointsReportFetch = () => {
  return(dispatch) => {
    axios.get('http://zssn-backend-example.herokuapp.com/api/report/infected_points.json')
      .then(response => {
        dispatch({ type: INFECTED_POINTS_REPORT_FETCH_SUCCESS, payload: response.data })
      });
  };
};

export const inventoryReportFetch = () => {
  return(dispatch) => {
    axios.get('http://zssn-backend-example.herokuapp.com/api/report/people_inventory.json')
      .then(response => {
        dispatch({ type: INVENTORY_REPORT_FETCH_SUCCESS, payload: response.data })
      });
  };
};

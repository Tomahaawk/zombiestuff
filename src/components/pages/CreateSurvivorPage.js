import React from 'react';
import { geolocated } from 'react-geolocated';
import SurvivorCreate from '../SurvivorCreate';

const CreateSurvivorPage = (props) => {

  return(
    <div>
      <h2>Register a new survivor</h2>
      <SurvivorCreate isGeolocationEnabled={props.isGeolocationEnabled} coords={props.coords} />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighaccuracy: true
  },
  userDecisionTimeout: 10000
}) (CreateSurvivorPage);

import React from 'react';
import { geolocated } from 'react-geolocated';
import SurvivorCreate from '../SurvivorCreate';
import '../../css/CreateSurvivorPage.css';

const CreateSurvivorPage = (props) => {

  return(
    <div className="Container-style-csp">
      <h2 className="Header-style-csp">Register a new survivor</h2>
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

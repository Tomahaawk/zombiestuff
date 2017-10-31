import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { survivorCreate, resetLatlon, resetErrorMessage } from '../actions';
import SurvivorForm from './SurvivorForm';

class SurvivorCreate extends Component {

  componentWillUnmount() {
    this.props.resetLatlon();
    this.props.resetErrorMessage();
  }

  componentWillMount() {
    this.props.resetLatlon();
  }

  concatInventory({water, food, medication, ammunition}) {
    var inventoryItems = '';
    if(water > 0) {
      inventoryItems = inventoryItems + 'Water:'+ water + ';';
    }
     if (food > 0) {
      inventoryItems = inventoryItems + 'Food:' + food + ';';
    }
     if (medication > 0) {
      inventoryItems = inventoryItems + 'Medication:' + medication + ';';
    }
    if (ammunition > 0) {
      inventoryItems = inventoryItems + 'Ammunition:' + ammunition + ';';
    }

    return inventoryItems;
  }

  handleSubmit(values) {
    const { name, age, gender } = values;
    const { water, food, medication, ammunition } = values;
    const items = this.concatInventory({water, food, medication, ammunition});
    const { latitude, longitude } = this.props;

    this.props.survivorCreate({ name, age, gender, items, latitude, longitude });
  }

  loadCoords(isGeolocationEnabled, coords) {
    if (isGeolocationEnabled && coords !== null) {
      //const coords = {latitude: 0, longitude: 0};
      return coords;

    } else {
      const { latitude, longitude } = this.props;
      const coords = {latitude, longitude};
      return coords;

    }
  }


  checkCreateResponse(error, response) {
    if(error === '' && response !== 201) {
      return;
    }
    else {
      if (error === '' && response === 201) {
        return (
          <Alert color="success" >
            Survivor registered with success!
          </Alert>
        );
      } else {
        return (
          <Alert color="danger" >
            {error}
          </Alert>
        );
      }
    }
  }

  render() {
    const { isGeolocationEnabled, error, response, coords } = this.props;

    return(
      <div>
        <SurvivorForm onSubmit={this.handleSubmit.bind(this)} coords={this.loadCoords(isGeolocationEnabled, coords)} />
        {this.checkCreateResponse(error, response)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { error, response } = state.survivorForm;
  //we can access mapProps store and get the
  //latitude and longitude that are being updated inside FullMap onMapClick method.
  const { latitude, longitude } = state.mapProps;

  return { latitude, longitude, error, response };
};

export default connect(mapStateToProps, { survivorCreate, resetLatlon, resetErrorMessage })(SurvivorCreate);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { survivorEdit, resetLatlon } from '../actions';
import EditSurvivorForm from './EditSurvivorForm';

class SurvivorEdit extends Component {

  componentWillUnmount() {
    this.props.resetLatlon();
  }

  componentWillMount() {
    this.props.resetLatlon();
  }


  handleSubmit(values) {
    const { id, name, age, gender } = values;
    const { latitude, longitude } = this.props;

    this.props.survivorEdit({ id, name, age, gender, latitude, longitude });
  }

  loadCoords() {
    const { latitude, longitude } = this.props;
    const coords = {latitude, longitude};
    return coords;
  }

  render() {
    const { coords, manualChange } = this.props;

    return(
      <div>
        <EditSurvivorForm onSubmit={this.handleSubmit.bind(this)} coords={this.loadCoords()} manualChange={manualChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { latitude, longitude, manualChange } = state.mapProps;

  return {latitude, longitude, manualChange};
}

export default connect(mapStateToProps, { survivorEdit, resetLatlon })(SurvivorEdit);

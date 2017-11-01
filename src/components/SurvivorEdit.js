import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { survivorEdit, resetLatlon } from '../actions';
import EditSurvivorForm from './EditSurvivorForm';
import '../css/EditSurvivorPage.css';


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

  checkEditResponse(error, response) {
    if(error === '' && response === null) {
      return;
    }
    else {
      if (error === '' && response === 200) {
        return (
          <Alert color="success" >
            Survivor updated with success!
          </Alert>
        )

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
    const { manualChange, response, error } = this.props;

    return(
      <div>
        <EditSurvivorForm onSubmit={this.handleSubmit.bind(this)} coords={this.loadCoords()} manualChange={manualChange} />
        {this.checkEditResponse(error, response)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { error, response } = state.survivorForm;
  const { latitude, longitude, manualChange } = state.mapProps;

  console.log(response);
  return {latitude, longitude, manualChange, error, response};
}

export default connect(mapStateToProps, { survivorEdit, resetLatlon })(SurvivorEdit);

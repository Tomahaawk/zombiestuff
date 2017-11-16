import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { survivorEdit, resetLatlon, resetErrorMessage } from '../actions';
import EditSurvivorForm from './EditSurvivorForm';
import '../css/EditSurvivorPage.css';


class SurvivorEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  }

  //Reset the coords so when the map is shown again, it shows the position (0 0) instead of the position used to create a survivor
  componentWillUnmount() {
    this.props.resetLatlon();
  }

  //reseting it on componentWillMount also prevents the center to be pre-defined in case the user clicked on the map when looking at the survivor list
  componentWillMount() {
    this.props.resetLatlon();
  }

  changeLoadingState = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }

  handleSubmit(values) {
    this.changeLoadingState();

    const { id, name, age, gender } = values;
    const { latitude, longitude } = this.props;

    this.props.survivorEdit({ id, name, age, gender, latitude, longitude });
  }

  loadCoords() {
    const { latitude, longitude } = this.props;
    const coords = {latitude, longitude};
    return coords;
  }

  //Verify for errors when using REST
  checkEditResponse(error, response) {
    if(error === '' && response !== 200) {
      return;
    }
    else {
      if (error === '' && response === 200) {
        this.notifySuccess();
        this.props.resetErrorMessage();
        this.changeLoadingState();

      } else {
        this.notifyFail(error);
        this.props.resetErrorMessage();
        this.changeLoadingState();

      }
    }
  }

  notifySuccess = () => {
    toast.success("Surivor updated with success!");
  }

  notifyFail = (error) => {
    toast.error(error);
  }

  render() {
    const { manualChange, response, error } = this.props;

    return(
      <div>
        <h2 className="Header-style-csp">Edit survivor</h2>
        <EditSurvivorForm onSubmit={this.handleSubmit.bind(this)} coords={this.loadCoords()} manualChange={manualChange} isLoading={this.state.isLoading} />
        <ToastContainer
          position="top-center"
          type="default"
          autoClose={5000}
          hideProgressBar
          closeOnClick
        />
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

export default connect(mapStateToProps, { survivorEdit, resetLatlon, resetErrorMessage })(SurvivorEdit);

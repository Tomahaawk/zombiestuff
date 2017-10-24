import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../css/SurvivorForm.css';

class SurvivorForm extends Component {

  render() {

    //NO FIELD VALIDATIONS ARE BEING MADE =d (yet)
    const { handleSubmit } = this.props;
    return(
      <div className="Container">
      <form onSubmit={handleSubmit} className="Form-container">
        <div className="Field-container">
          <label className="Field-label">Name</label>
          <Field
              className="Field-input"
              name="name"
              component="input"
              type="text"
              placeholder="Survivor Name"
            />
        </div>

        <div className="Field-container">
          <label className="Field-label">Age</label>
            <Field
              className="Field-input"
              name="age"
              component="input"
              type="text"
              placeholder="Survivor Age"
            />
        </div>

        <div className="Field-container">
          <label className="Field-label">Sex</label>
          <div>
            <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="M"
                />
                Male
            </label>

            <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="F"
                />
                Female
            </label>
          </div>
        </div>

        <label style={{fontSize: 'medium', fontWeight: 'bold', marginTop: 10}}>Inventory Items</label>
        <div>

            <div className="Field-container">
              <label className="Field-label">Water</label>
                <Field
                  className="Field-input"
                  name="water"
                  component="input"
                  type="number"
                  placeholder="Quantity"
                />
            </div>

            <div className="Field-container">
              <label className="Field-label">Food</label>
                <Field
                  className="Field-input"
                  name="food"
                  component="input"
                  type="number"
                  placeholder="Quantity"
                />
            </div>

            <div className="Field-container">
              <label className="Field-label">Medication</label>
              <Field
                className="Field-input"
                name="medication"
                component="input"
                type="number"
                placeholder="Quantity"
              />
            </div>

            <div className="Field-container">
              <label className="Field-label">Ammunition</label>
              <Field
                className="Field-input"
                name="ammunition"
                component="input"
                type="number"
                placeholder="Quantity"
              />
            </div>

          </div>

        <div>
          <button type="submit">
            Register Survivor
          </button>
        </div>
      </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'survivor-form'
})(SurvivorForm);

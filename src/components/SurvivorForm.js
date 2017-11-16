import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Label } from 'reactstrap';
import { PulseLoader } from 'react-spinners';
import FullMap from './FullMap';
import '../css/SurvivorForm.css';

const required = value => (value ? undefined : 'Required')
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const notZero = value =>  value < 0 ? 'Must be a valid number' : undefined

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div className="Field-container">
    <Label className="Field-label">{label}</Label>
    <input {...input} placeholder={placeholder} type={type} className="Field-input" />
    { touched &&
      ((error && <span style={{marginTop: 5, color: "red"}}>{error}</span>))}
  </div>
)

const renderRadio = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div style={{margin: 5}}>
    <input {...input} type={type} />
    <Label style={{marginLeft: 5}}>{label}</Label>
    { touched &&
      ( (error && <span style={{marginTop: 5, color: "red"}}>{error}</span>) )}
  </div>
)

const verifyLoading = (isLoading) => {
  if(isLoading) {
    return(
      <PulseLoader
        color={'#4A4A4A'}
        loading={isLoading}
      />
    );
  }
  return(
    <Button type="submit">
      Register Survivor
    </Button>
  );
}

let SurvivorForm = (props) => {
    const { handleSubmit } = props;
    return(
      <div className="Container">
      <Form onSubmit={handleSubmit} className="Form-container">

        <div>
          <Field
              name="name"
              component={renderField}
              type="text"
              label="Name"
              placeholder="Survivor Name"
              validate={[required]}
            />
        </div>

        <div>
            <Field
              className="Field-input"
              name="age"
              component={renderField}
              type="text"
              label="Age"
              placeholder="Survivor Age"
              validate={[required, number, notZero]}
            />
        </div>

        <div className="Field-container">
          <label className="Field-label">Sex</label>
          <div className="Field-container-sex">
              <Field
                name="gender"
                component={renderRadio}
                type="radio"
                value="M"
                label="Male"
              />
              <Field
                name="gender"
                component={renderRadio}
                type="radio"
                value="F"
                label="Female"
                validate={[required]}
              />
          </div>
        </div>

        <label style={{fontSize: 'medium', fontWeight: 'bold', marginTop: 10}}>Inventory Items</label>
        <div>

            <div>
                <Field
                  className="Field-input"
                  component={renderField}
                  label="Water"
                  name="water"
                  type="number"
                  placeholder="Quantity"
                  validate={[required, number, notZero]}
                />
            </div>

            <div>
                <Field
                  className="Field-input"
                  component={renderField}
                  label="Food"
                  name="food"
                  type="number"
                  placeholder="Quantity"
                  validate={[required, number, notZero]}
                />
            </div>

            <div>
              <Field
                className="Field-input"
                component={renderField}
                label="Medication"
                name="medication"
                type="number"
                placeholder="Quantity"
                validate={[required, number, notZero]}
              />
            </div>

            <div>
              <Field
                className="Field-input"
                component={renderField}
                label="Ammunition"
                name="ammunition"
                type="number"
                placeholder="Quantity"
                validate={[required, number, notZero]}
              />
            </div>

          </div>

          <div>
            <label style={{fontSize: 'medium', fontWeight: 'bold', marginTop: 10}}>Location</label>
            <Field
              name="map"
              component={FullMap}
              input={props.coords}
            />

          </div>

        <div style={{margin: 15}}>
          {verifyLoading(props.isLoading)}
        </div>
      </Form>
      </div>
    );
}

export default reduxForm({
  form: 'survivorRegisterForm'
})(SurvivorForm);

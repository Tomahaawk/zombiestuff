import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Label } from 'reactstrap';
import '../css/SurvivorForm.css';

const renderField = ({
  input,
  label,
  placeholder,
  type
}) => (
  <div className="Field-container">
    <Label className="Field-label"> {label} </Label>
    <input {...input} placeholder={placeholder} type={type} className="Field-input" />
  </div>
)

let TradeForm = (props) => {
  const { handleSubmit } = props;

  return(
    <div className="Container">
      <Form onSubmit={handleSubmit} className="Form-container">
        <div>
          <label>Items Wanted</label>
          <div>
            <Field
              name="waterWanted"
              component={renderField}
              type="number"
              label="Water"
              placeholder="Quantity wanted"
            />
          </div>

          <div>
            <Field
              name="foodWanted"
              component={renderField}
              type="number"
              label="Food"
              placeholder="Quantity wanted"
            />
          </div>

          <div>
            <Field
              name="medicationWanted"
              component={renderField}
              type="number"
              label="Medication"
              placeholder="Quantity wanted"
            />
          </div>

          <div>
            <Field
              name="ammunitionWanted"
              component={renderField}
              type="number"
              label="Ammunition"
              placeholder="Quantity wanted"
            />
          </div>
        </div>

        <div>
          <label>Items Offered</label>
          <div>
            <Field
              name="waterOffered"
              component={renderField}
              type="number"
              label="Water"
              placeholder="Quantity offered"
            />
          </div>

          <div>
            <Field
              name="foodOffered"
              component={renderField}
              type="number"
              label="Food"
              placeholder="Quantity offered"
            />
          </div>

          <div>
            <Field
              name="medicationOffered"
              component={renderField}
              type="number"
              label="Medication"
              placeholder="Quantity offered"
            />
          </div>

          <div>
            <Field
              name="ammunitionOffered"
              component={renderField}
              type="number"
              label="Ammunition"
              placeholder="Quantity offered"
            />
          </div>
        </div>

        <div style={{margin: 15}}>
          <Button type="submit">
            Trade
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default reduxForm({
  form: 'tradeForm'
})(TradeForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Button } from 'reactstrap';

const renderField = ({
  input,
  label,
  placeholder,
  type
}) => (
  <div>
    <label> {label} </label>
    <input {...input} placeholder={placeholder} type={type} />
  </div>
)

let TradeForm = (props) => {
  const { handleSubmit } = props;

  return(
    <div>
      <Form onSubmit={handleSubmit}>
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
            Trade Items
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default reduxForm({
  form: 'tradeForm'
})(TradeForm);

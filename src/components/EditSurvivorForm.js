import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Button } from 'reactstrap';
import { singleSurvivorFetch } from '../actions';
import FullMap from './FullMap';
import '../css/SurvivorForm.css';


const renderField = ({
  input,
  label,
  placeholder,
  type,
}) => (
  <div className="Field-container">
    <label className="Field-label">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="Field-input" />
  </div>
)

const renderRadio = ({
  input,
  label,
  type,
}) => (
  <div style={{margin: 5}}>
    <input {...input} type={type} />
    <label style={{marginLeft: 5}}>{label}</label>
  </div>
)

const formatCoords = (lonLat) => {
  //singleSurvivor.lonlat
    if(lonLat === null || lonLat === undefined) {
      const coord = {latitude: 0, longitude: 0}
      return coord;
    }
    const newLonLatString = lonLat.replace('POINT ', '').replace(/[()]/g, '');
    const coordsString =  newLonLatString.split(" ");
    const latitude = Number(coordsString[0]);
    const longitude = Number(coordsString[1]);
    const coords = {latitude, longitude};

    return coords;

}

const labelMap = (coords) => {
  if(coords.latitude === 0 && coords.longitude === 0) {
    return <label style={{fontSize: 'medium', fontWeight: 'bold', marginTop: 10}}>Location Unknown, Set Location</label>
  } else {
    return <label style={{fontSize: 'medium', fontWeight: 'bold', marginTop: 10}}>Update Location</label>
  }
}

const coordsManuallyChanged = (manualChange, coords, lonlat) => {
  if(!manualChange) {
    //const { lonlat } = this.props.initialValues;
    return formatCoords(lonlat);
  } else {
    return coords;
  }
}

let EditSurvivorForm = (props) => {
  const { handleSubmit, load, params, coords, manualChange } = props;

  const {lonlat} = props.initialValues;
  //console.log(coords, manualChange);

  //const coords2 = formatCoords(lonlat);
  const coords2 = coordsManuallyChanged(manualChange, coords, lonlat);
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
          />
        </div>

        <div>
          <Field
            name="age"
            component={renderField}
            type="text"
            label="Age"
            placeholder="Survivor Age"
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
              />
          </div>
        </div>

        <div>
          {labelMap(coords2)}
          <Field
            component={FullMap}
            input={coords2}
          />
        </div>

        <div style={{margin: 15}}>
          <Button type="submit">
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  );
}

 EditSurvivorForm = reduxForm({
   form: 'edit-survivor-form'
 })(EditSurvivorForm)

 EditSurvivorForm = connect(
   state => ({
     initialValues: state.survivorList.singleSurvivor
   }),
   { load: singleSurvivorFetch }
 )(EditSurvivorForm)

 export default EditSurvivorForm;
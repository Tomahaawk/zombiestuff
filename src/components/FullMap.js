import React from 'react';
import { connect } from 'react-redux';
import { latlonChanged } from '../actions';
import MapLocationPanel from './MapLocationPanel';

class FullMap extends React.Component {

  //changes the current center (lat, lon)
  onMapClick(event) {
    const latlon = event.latLng;
    const latitude = latlon.lat();
    const longitude = latlon.lng();
    this.props.latlonChanged({latitude, longitude})

  }

  render() {
    //console.log(this.props.input);
    return(
      <MapLocationPanel
        coords={this.props.input}
        isMarkerShown={true}
        onMapClick={this.onMapClick.bind(this)}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC12eEa1Idn_dVKjlDqNeUkl963boy9ZCQ&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `inherit` }} />}
        mapElement={<div style={{ height: `400px` }} />}
      />
    );
  }
}

const mapStateToProps = ({ mapProps }) => {
  const {latitude, longitude} = mapProps;

  return { latitude, longitude };
}

export default connect(mapStateToProps, { latlonChanged })(FullMap);

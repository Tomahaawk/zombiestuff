import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';



const MapLocationPanel = withScriptjs(withGoogleMap( (props) =>

      <GoogleMap
        defaultZoom={5}
        center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
        onClick={props.onMapClick}
      >
        {props.isMarkerShown && <Marker position={{ lat: props.coords.latitude, lng: props.coords.longitude }} />}
      </GoogleMap>

  ))

export default MapLocationPanel;

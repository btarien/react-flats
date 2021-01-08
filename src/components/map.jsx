import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={11}
          >
            <Marker lat={this.props.center.lat} lng={this.props.center.lng}/>
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default Map;
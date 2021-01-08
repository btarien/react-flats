import React, { Component } from 'react';
import FlatList from './flatlist';
import Map from './map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    }
  }

  selectFlat = (flat) => {
    this.setState({selectedFlat: flat})
  };

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList selectFlatFxn={this.selectFlat} selectedFlat={this.state.selectedFlat} />
        <Map center={this.center()} />
      </div>
    );
  }
}

export default App;

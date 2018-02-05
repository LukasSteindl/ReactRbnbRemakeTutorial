import React, { Component } from 'react';
import Flat from './components/Flat';
import "./app.css";
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flats: [],
      selectedFlat:null
    };
  }

  componentDidMount()
  {
    const url="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({flats: data});
      });
  }

  selectFlat = (flat) => {
    console.log("hallo");
    console.log(flat); 
    this.setState({selectedFlat: flat})
  }

  render() {
    let center = {
      lat: 48.1,
      lng: 2.1
    }
    if (this.state.selectedFlat)
    {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            {
              this.state.flats.map((flat) => { 
                return <Flat key={flat.name} flat={flat} selectFlat={this.selectFlat} />
              })
            } 
          </div>
        </div>
        <div className="map">
        <GoogleMapReact center={center} zoom={13}>
            {
              this.state.flats.map((flat) => { 
                return <Marker 
                key={flat.name} 
                lat={flat.lat} 
                lng={flat.lng} 
                text={flat.price} 
                selected = {this.state.selectedFlat===flat}
                />
              })
            } 
        </GoogleMapReact>
         </div>
      </div>
    );
  }
}

export default App;

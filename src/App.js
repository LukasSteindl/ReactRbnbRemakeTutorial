import React, { Component } from 'react';
import Flat from './components/Flat';
import "./app.css";
class App extends Component {
  render() {
    const flat ={
      "name": "Super 60m2 in trendy neighborhood!",
      "imageUrl" : 
        "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
      "price": 150,
      "priceCurrency": "EUR",
      "lat": 48.885312,
      "lng": 2.341225
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
          <Flat flat={flat}/>
          <Flat flat={flat}/>
          </div>
        </div>
        <div className="map"> </div>
      </div>
    );
  }
}

export default App;

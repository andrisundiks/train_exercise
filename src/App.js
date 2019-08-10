import React, { useState } from 'react';
import 'bulma/css/bulma.css';

import { trainRoutes } from "./trainRoutes";

function App() {
    // State for the app
   const [ origin, setOrigin ] = useState('Edinburgh');
   const [ destination, setDestination ] = useState('London');
   const [ currentRoute, setCurrentRoute ] = useState([]);

   // Creates array of jsx objects from trainRoutes to populate our select elements
    // making sure the user cannot pick same value for both origin and destination
   const generateCityList = item => {
       const oppositeValue = item === origin? destination : origin;
       return Object.keys(trainRoutes).map( city => {
           if(city !== oppositeValue) { return <option value={city}> {city} </option> }
       })
   };

    // Event handlers
   const handleOrigin = e => { setOrigin(e.target.value) };
   const handleDestination = e => { setDestination(e.target.value) };

   // Our main function.
   const checkConnection = (link = origin, dest = destination, route = []) => {
       route.push(link);
       const links = trainRoutes[link];
       if (links) {
           if(links.includes(dest)) { updateRoute([...route, dest]) }
           else {
               links.forEach(link => {
                   if (!route.includes(link)) {
                       checkConnection(link, dest, route)
                   }
               })
           }
       }
   };

   // React isn't happy if the setState call is inside a loop. Dangerous!
   const updateRoute = route => {
       setCurrentRoute(route);
   };

   const formatRoute = () => {
       return currentRoute.length ? currentRoute.toString().split(',').join(' -> ') :
        'Please select a starting city and a destination'
   };


  return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-fifth">
                  <section className="is-pulled-right">
                      <label htmlFor="origin">Select an origin</label>
                      <div className="field">
                          <div className="control">
                              <select
                                  name="origin"
                                  className="select is-info"
                                  value={ origin }
                                  onChange={ handleOrigin }
                              >
                                  { generateCityList(origin) }
                              </select>
                          </div>
                      </div>
                      <label htmlFor="origin">Select a destination</label>
                      <div className="field">
                          <div className="control">
                              <select
                                  name="destination"
                                  className="select is-info"
                                  value={ destination }
                                  onChange={ handleDestination }
                              >
                                  { generateCityList(destination) }
                              </select>
                          </div>
                      </div>
                      <a
                          className="button"
                          onClick={() => checkConnection()}
                      >
                          Check route
                      </a>
                  </section>
              </div>
              <div className="column is-two-thirds box">{ formatRoute() }</div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default App;

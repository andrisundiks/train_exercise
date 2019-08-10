import React, { useState } from 'react';
import 'bulma/css/bulma.css';

import { trainRoutes } from "./trainRoutes";

function App() {
   const [ origin, setOrigin ] = useState('Edinburgh');
   const [ destination, setDestination ] = useState('Edinburgh');

   // Creates array of jsx objects from trainRoutes to populate our select elements
   const generateCitiesList = () => {
       return Object.keys(trainRoutes).map( city => {
           return <option value={city}> {city} </option>
       })
   };

   const handleOrigin = e => { setOrigin(e.target.value) };
   const handleDestination = e => { setDestination(e.target.value) };

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
                                  { generateCitiesList() }
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
                                  { generateCitiesList() }
                              </select>
                          </div>
                      </div>
                  </section>
              </div>
              <div className="column is-two-thirds box">Auto</div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default App;

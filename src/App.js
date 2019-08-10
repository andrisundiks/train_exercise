import React from 'react';
import 'bulma/css/bulma.css';

function App() {
  return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-fifth">
                  <section className="is-pulled-right">
                      <div className="field">
                          <div className="control">
                              <select
                                  name="origin"
                                  className="select is-info"
                              >
                              </select>
                          </div>
                      </div>
                      <div className="field">
                          <div className="control">
                              <select
                                  name="destination"
                                  className="select is-info"
                              >
                              </select>
                          </div>
                      </div>
                  </section>
              </div>
              <div className="column box">Auto</div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default App;

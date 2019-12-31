import React, { Component } from 'react';
import { Provider } from 'react-redux'
import AppRouter from './AppRouter';
import { Store, Persistor } from './utils/store'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Provider store={Store} >
          <PersistGate persistor={Persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;

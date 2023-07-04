import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
// import { PersistGate } from 'redux-persist/es/integration/react';
import AppNav from './navs/AppNav';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNav />
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store/store';
import App from './src/screens/Home';

const AppWrapper = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};
export default AppWrapper;

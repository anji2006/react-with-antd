import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';

import './App.css';
import Auth from './HOC/Authontication';
import DefaultLayout from './layout/DefaultLayout';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout />
      <ThemeSwitch />
    </Provider>
  );
}

export default Auth(App);

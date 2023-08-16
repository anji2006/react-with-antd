import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export default store;

// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import shofyReducer from './Redux Reducer/ReduxReducer';

export const store = configureStore({
    reducer: {
        shofy: shofyReducer,
    },
});

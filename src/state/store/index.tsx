import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice';
import shopReducer from '../slices/productsSlice';


const store = configureStore({
  reducer: {
    root: combineReducers({ user: userReducer ,shop:shopReducer}),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
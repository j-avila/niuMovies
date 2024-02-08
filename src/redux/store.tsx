import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import { trailerSlice } from './services/trailerSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [trailerSlice.reducerPath]: trailerSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, trailerSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

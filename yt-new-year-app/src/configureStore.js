import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import { logger } from 'redux-logger';
import goalsSlice from './store/goalsSlice';

const rootReducer = combineReducers({
  goals: goalsSlice,
});

const middleware = (getDefaultMiddleware) =>
    import.meta.env.MODE !== 'production'
        ? getDefaultMiddleware().concat(logger)
        : getDefaultMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: import.meta.env.MODE !== 'production'
});

export const useAppDispatch = () => useDispatch();

export default store;

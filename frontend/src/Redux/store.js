import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import passwordReducer from './reducers/passwordReducers'
import storage from 'redux-persist/lib/storage';
import loaderReducer from './reducers/loaderReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    loader: loaderReducer,
    passwords:passwordReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

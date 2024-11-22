import { configureStore } from '@reduxjs/toolkit';
import shofyReducer from './Redux Reducer/ReduxReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Client-side storage

// Noop storage for server-side
const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem() {
    return Promise.resolve();
  },
  removeItem() {
    return Promise.resolve();
  },
});

// Choose storage based on environment
const isServer = typeof window === 'undefined';
const persistStorage = isServer ? createNoopStorage() : storage;

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage: persistStorage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, shofyReducer);

// Configure the store
export const store = configureStore({
  reducer: {
    shofy: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create a persistor
export const persistor = persistStore(store);

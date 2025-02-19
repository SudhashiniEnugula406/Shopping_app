import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';

const persistConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);//store the data local

export const store = configureStore({// it is used to access data in all places
  reducer: {
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);

import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import itemsReducer from './itemsSlice';

const persistItemsConfig = {
  key: 'items',
  storage: AsyncStorage,
};

const persistedItemsReducer = persistReducer(persistItemsConfig, itemsReducer);

export const store = configureStore({
  reducer: {
    itemsPart: persistedItemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});

export const persistor = persistStore(store);

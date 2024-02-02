import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import User from './reducers/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  //   reducer: rootReducer,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;

export const persistor = persistStore(store);

persistor.purge();

import { configureStore,combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/userReducer";
import workoutReducer from "./workoutSlice"
import { otherReducer } from "./reducers/otherReducer";

import {persistCombineReducers, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
persistStore} from 'redux-persist';
import logger from "redux-logger";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
const rootReducer = combineReducers({
  user:userReducer,
  work:workoutReducer,
  other:otherReducer,
  product:productReducer,
  cart:cartReducer
});

const config = {
  key: 'asimiri001',
  storage: AsyncStorage,
  blacklist:['other','work','product','cart']
}
                    
const pReducer = persistReducer(config, rootReducer);

     
        
export const store = configureStore({
  reducer: pReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
  // middleware: [thunk]
});

export const persistor = persistStore(store)

// 192.168.68.159 172.20.10.2 172.20.10.2
// 172.20.10.2
// 172.20.10.2 192.168.1.138
export const server = "http:/192.168.1.138:5000/api/v1"
            
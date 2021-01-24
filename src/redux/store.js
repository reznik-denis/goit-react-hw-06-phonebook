/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from 'redux'; //createStore
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { itemsRedusser, filterReduser } from "./redussers";

const persistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
}

const contactsReduser = combineReducers({
    items: itemsRedusser,
    filter: filterReduser
});

// const rootReduser = combineReducers({
//     contacts: contactsReduser
// });

// const store = createStore(rootReduser, composeWithDevTools());

const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, contactsReduser)
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

const persistore = persistStore(store);

export default { store, persistore};
import {combineReducers} from 'redux'
import { createStore,applyMiddleware } from 'redux'
// import { composeWithDevTools } from '@redux-devtools/extension';

import cryptoReducer from './reducers/crypto.reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

 
 
// const rootReducer = combineReducers({
//   crypto : cryptoReducer,
// })

// const persistConfig = {
//    key: 'root',
//    storage,
//  }
  
//  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
 const store = createStore(
  
   combineReducers({
    crypto : cryptoReducer,
  })
 )
//  export const persistor = persistStore(store);

export default store;
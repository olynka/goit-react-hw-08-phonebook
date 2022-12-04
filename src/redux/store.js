import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './contacts/contacts-slice';
import { filterSlice } from 'redux/filter/filterSlice';
import { contactsReducer } from './auth/authSlice';
import { persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist'




const store = configureStore({
  reducer: {
    contacts: counterSlice.reducer,
    filter: filterSlice.reducer,
     auth: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
   
});
const persistor = persistStore(store);
export { store,persistor };
  

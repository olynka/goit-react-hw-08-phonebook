import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './authOperation';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import * as authOperation from './authOperation';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isCurrentUser: false,
  error: null,
  isLoading: false,
};


const  authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(authOperation.register.pending, (state) => {
          state.isLoading = true;
      })
            .addCase(register.fulfilled, (state, actions) => {
           state.isLoading = true;
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLogin = true;
            })
          .addCase(authOperation.register.rejected, (state, action) => {
             state.isLoading = false;
      state.error = action.payload;
          })
      
        .addCase(authOperation.logIn.pending, (state) => {
          state.isLoading = true;
        })
      .addCase(logIn.fulfilled, (state, actions) => {
            state.isLoading = true;
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLogin = true;
      })
      .addCase(authOperation.logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        
      })
         .addCase(authOperation.logOut.pending, (state) => {
          state.isLoading = true;
        
      })
       .addCase(authOperation.logOut.fulfilled, (state, actions) => {
          state.user = { name: null, email: null };
      state.token = '';
      state.isLogin = false;
       })
        .addCase(authOperation.logOut.rejected, (state, action) => {
          state.isLoading = false;
      state.error = action.payload;
        })
        .addCase(authOperation.authCurrentUser.pending, (state, actions) => {
           state.isCurrentUser = true;
        })
       .addCase(authOperation.authCurrentUser.fulfilled, (state, actions) => {
         state.user = actions.payload;
      state.isLogin = true;
      state.isCurrentUser = false;
       })
      .addCase(authOperation.authCurrentUser.rejected, (state, actions) => {
        state.isLogin = false;
      state.isCurrentUser = false;
       })
  },
  
})

const persistConfig = {
 key: 'auth',
  storage,
  whitelist: ['token'],
}
export const contactsReducer = persistReducer(persistConfig,authSlice.reducer);

export const authReducer = authSlice.reducer;
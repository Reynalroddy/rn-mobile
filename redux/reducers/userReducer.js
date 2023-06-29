import { createReducer } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.loading = true;
    })
    .addCase("loadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("logoutRequest", (state) => {
      state.loading = true;
    })
    .addCase("registerRequest", (state) => {
      state.loading = true;
    });
  builder
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.token = action.payload.token;
    })
    .addCase("loadUserSuccess",(state, action) => {
      
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase("logoutSuccess", (state, action) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.message = action.payload;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
  builder
    .addCase("loginFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("loadUserFail", (state, action) => {
      state.loading = false;
      // state.error = action.payload;
    })
    .addCase("logoutFail", (state, action) => {
      state.loading = false;
      // state.error = action.payload;
    })
    .addCase("registerFail", (state, action) => {
      state.loading = false;
      // state.isAuthenticated = false;
      state.error = action.payload;
    });

  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
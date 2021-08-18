import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../Interfaces";

const initialState: AuthState = {
  isAuthenticated: false,
  token: "",
  user: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    User: (state, action) => {
      state.user = action.payload;
    },
    logout: () => initialState,
  },
});

export const { login, logout, User } = AuthSlice.actions;
export default AuthSlice.reducer;

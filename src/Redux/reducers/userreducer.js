import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

/*const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});*/

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem("swaphub-app-token", action.payload.token);
    },
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload.user;
      localStorage.setItem("swaphub-app-token", action.payload.token);
    },
    logout: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("swaphub-app-token");
    },
  },
});

export const { updateUser, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  severity: "success",
};

const swaphubSlice = createSlice({
  name: "swaphub",
  initialState,
  reducers: {
    openSwaphub: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    closeSwaphub: (state, action) => {
      state.open = false;
      state.message = "";
      state.severity = "";
    },
  },
});

export const { openSwaphub, closeSwaphub } = swaphubSlice.actions;
export default swaphubSlice.reducer;

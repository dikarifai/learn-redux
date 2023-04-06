import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: null,
  isLoading: false,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustumer: (state, action) => {
      state.customer = action.payload;
    },
    resetCustomer: (state) => {
      state.customer = initialState.customer;
    },
  },
});

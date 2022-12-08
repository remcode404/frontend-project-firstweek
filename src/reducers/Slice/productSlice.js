import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null
};

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/product`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const productSlice = createSlice({
  name: "fetchProduct",
  initialState,
  reducers: {},


  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      console.log(action.payload);
    })
    .addCase(fetchProducts.rejected, (state, action) => {
    state.error = action.payload
    })
  },
});

export default  productSlice.reducer;

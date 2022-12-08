import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  loading: false
};

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/product`);
      const data = await res.json();
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
      state.loading = false
    })
    .addCase(fetchProducts.pending, (state, action) => {
    state.loading = true
    })
    .addCase(fetchProducts.rejected, (state, action) => {
    state.error = action.payload
    state.loading = false
    })
  },
});

export default  productSlice.reducer;

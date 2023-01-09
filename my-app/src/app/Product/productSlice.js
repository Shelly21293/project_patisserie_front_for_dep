import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData,addData,delData, updData } from './productAPI';

const initialState = {
  prodList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getProductAsync = createAsyncThunk('product/getData',async (cat_id) => {
    const response = await getData(cat_id);
    // console.log(response.data);
    return response.data;
  }
);

export const addProductAsync = createAsyncThunk('product/addData',async (newData) => {
    const response = await addData(newData.prod, newData.token);
    // console.log(response.data);
    return response.data;
  }
);

export const delProductAsync = createAsyncThunk('product/delData',async (newData) => {
    const response = await delData(newData.id, newData.token);
    // console.log(response)
    return response.data;
  }
);

export const updProductAsync = createAsyncThunk('product/updData',async (newData) => {
    console.log(newData);
  const response = await updData(newData.prod, newData.id, newData.token);
  // console.log(response.data);
  return response.data;
}
);

// const response = await updData({desc: newData.desc, price: newData.price}, newData.id, newData.token);



// product method
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        console.log(action.payload);
        state.prodList =action.payload;
      },)
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.prodList =[...state.prodList,action.payload];
      },)
      .addCase(delProductAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.prodList = state.prodList.filter((x) => x.id !== action.payload);
      },)
      .addCase(updProductAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        console.log(action);
        // let updProd = state.prodList.find((x) => x.id === action.payload.id);
        // updProd.desc = action.payload.desc;
        // updProd.price = action.payload.price;
      },);
  },
});

// methods to export
// export const {  } = shopSlice.actions;


// selctors to export
export const selectProdList = (state) => state.product.prodList;

export default productSlice.reducer;

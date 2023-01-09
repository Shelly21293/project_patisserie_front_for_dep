import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData,addData, delData } from './customerAPI';

const initialState = {
  customerProdList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getDataAsync = createAsyncThunk('customer/getData',async () => {
    const response = await getData();
    // console.log(response.data);
    return response.data;
  }
);

export const addDataAsync = createAsyncThunk('customer/addData',async (newData) => {
    const response = await addData(newData);
    // console.log(response.data);
    return response.data;
  }
);

export const delDataAsync = createAsyncThunk('customer/delData',async (id) => {
    const response = await delData(id);
    // console.log(response)
    return id;
  }
);

// export const updDataAsync = createAsyncThunk('shop/updData',async (newData) => {
//   const response = await updData(newData, newData.id);
//   // console.log(response.data);
//   return response.data;
// }
// );


// customer method
export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.customerProdList =action.payload;
      },)
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.customerProdList =[...state.customerProdList,action.payload];
      },)
      .addCase(delDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.customerProdList = state.customerProdList.filter((x) => x.id !== action.payload);
      },)

      // .addCase(updDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   let updProd = state.cart.find((x) => x.id === action.payload.id);
      //   updProd.desc = action.payload.desc;
      //   updProd.price = action.payload.price;
      // },);
  },
});

// methods to export
// export const {  } = shopSlice.actions;


// selctors to export
export const selectCustomerProdList = (state) => state.customer.customerProdList;

export default customerSlice.reducer;

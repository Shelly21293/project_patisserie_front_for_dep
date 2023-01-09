import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData1, getData2, addData } from './orderAPI';

const initialState = {
  orderList:[],
  orderDetailList :[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getOrderAsync = createAsyncThunk('order/getData1',async (token) => {
    const response = await getData1( token);
    // console.log(response.data);
    return response.data;
  }
);

export const getOrderDetailAsync = createAsyncThunk('order/getData2',async (payloud) => {
  const response = await getData2(payloud.id, payloud.token);
  // console.log(response.data);
  return response.data;
}
);

export const addOrderAsync = createAsyncThunk('order/addData',async (payloud) => {
    const response = await addData(payloud.myCart, payloud.token);
    // console.log(response.data);
    return response.data;
  }
);

// export const delDataAsync = createAsyncThunk('order/delData',async (id) => {
//     const response = await delData(id);
//     // console.log(response)
//     return id;
//   }
// );

// export const updDataAsync = createAsyncThunk('order/updData',async (newData) => {
//   const response = await updData(newData, newData.id);
//   // console.log(response.data);
//   return response.data;
// }
// );


// cart method
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
 
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(getOrderAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        console.log(action.payload);
        state.orderList =action.payload;
      },)
      .addCase(getOrderDetailAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        console.log(action.payload);
        state.orderDetailList =action.payload;
      },)
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        // state.cartList =[...state.cartList,action.payload];
      },)
      // .addCase(delDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   state.cartList = state.customerProdList.filter((x) => x.id !== action.payload);
      // },)

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
// export const { CartToSend } = orderSlice.actions;


// selctors to export
// export const selectMyOrder = (state) => state.order.myCart;
export const selectOrderList = (state) => state.order.orderList;
export const selectOrderDetailList = (state) => state.order.orderDetailList;

export default orderSlice.reducer;

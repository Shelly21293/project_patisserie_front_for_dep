import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData, addData, delData, updData } from './categoryAPI';

const initialState = {
  categoryList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getCategoryAsync = createAsyncThunk('category/getData',async () => {
    const response = await getData();
    // console.log(response.data);
    return response.data;
  }
);

export const addCategoryAsync = createAsyncThunk('category/addData',async (newData) => {
    const response = await addData(newData.cat, newData.token);
    // console.log(response.data);
    return response.data;
  }
);

export const delCategoryAsync = createAsyncThunk('category/delData',async (newData) => {
    const response = await delData(newData.id, newData.token);
    // console.log(response)
    return response.data;
  }
);

export const updCategoryAsync = createAsyncThunk('category/updData',async (newData) => {
  const response = await updData(newData.cat, newData.id, newData.token);
  // console.log(response.data);
  return response.data;
}
);


// category method
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        console.log(action.payload);
        state.categoryList =action.payload;
        
      },)
      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.categoryList =[...state.categoryList,action.payload];
      },)
      .addCase(delCategoryAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.categoryList = state.categoryList.filter((x) => x.id !== action.payload);
      },)

      .addCase(updCategoryAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        console.log(action);
        // let updProd = state.category.find((x) => x.id === action.payload.id);
        // updProd.desc = action.payload.desc;
        // updProd.price = action.payload.price;
      },);
  },
});

// methods to export
// export const {  } = shopSlice.actions;


// selctors to export
export const selectCategoryList = (state) => state.category.categoryList;

export default categorySlice.reducer;

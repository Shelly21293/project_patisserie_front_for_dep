import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product/productSlice';
import customerReducer from './customerSlice'
import orderReducer from './Cart_Order/orderSlice'
import loginReducer from './Login/loginSlice'
import categoryReducer from './Category/categorySlice'
import cartReducer from './Cart_Order/cartSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
    customer: customerReducer,
    order: orderReducer,
    cart: cartReducer,
    category: categoryReducer,
    
  },
});

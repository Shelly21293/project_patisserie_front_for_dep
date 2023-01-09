import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomerProdList, getDataAsync, delDataAsync } from '../customerSlice';
import { getOrderDetailAsync, addOrderAsync, selectOrderDetailList } from './orderSlice';
import {  selectToken} from '../Login/loginSlice'
import { Outlet, Link, NavLink, useParams } from "react-router-dom";



export function OrderDetails() {
  const orderDetail = useSelector(selectOrderDetailList);
  // prodList name can be changed
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  let params = useParams();
  let order_id = params.id;

  useEffect(() => {
    dispatch(getOrderDetailAsync({id:order_id, token: token}));
  }, [order_id]);


  return (
    <div >
      <h3 className="mt-4"><i>Order detail</i></h3>
      {/* {orders} */}
        {orderDetail.map((order) => (
        <div>
          
          
          Product: {order.product_id} {", "}
          Amount: {order.amount} {", "}
          Total: {order.total} 
          
        </div>
      ))}

      {/* <button >
        <h2 onClick={() => dispatch(addOrderAsync(prodList))}>Check out</h2>
      </button> */}
    </div>
  );
}
export default OrderDetails

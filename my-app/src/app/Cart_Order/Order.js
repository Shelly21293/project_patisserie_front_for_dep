import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomerProdList, getDataAsync, delDataAsync } from '../customerSlice';
import { getOrderAsync, addOrderAsync, selectOrderList } from './orderSlice';
import {  selectToken} from '../Login/loginSlice'
import { Outlet, Link, NavLink } from "react-router-dom";



export function Order() {
  const orders = useSelector(selectOrderList);
  // prodList name can be changed
  const dispatch = useDispatch();
  const token = useSelector(selectToken);


  useEffect(() => {
    dispatch(getOrderAsync(token));
  }, []);


  return (
    <div >
      <h3 className="mt-4"><i>My last orders</i></h3>
      {orders.map((order) => (
        <div>
          
          <Link key={order._id} to={`/myOrders/${order._id}`}>
            Date: {order.createdTime} {", "} Total: {order.total}
          </Link>
        

        </div>
      ))}
<div>
<Outlet></Outlet>
</div>
      {/* <button >
        <h2 onClick={() => dispatch(addOrderAsync(prodList))}>Check out</h2>
      </button> */}
    </div>
  );
}
export default Order

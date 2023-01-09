import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAsync, selectProdList } from './Product/productSlice';
import {addDataAsync} from './customerSlice'
// import styles from './Counter.module.css';



export function Customer() {
  const prodList = useSelector(selectProdList);
  // prodList name can be changed
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProductAsync());
  }, []);


  return (
    <div style={{backgroundColor:"violet"}}>
      <h1>Customer GUI</h1>

      {prodList.map((prod) => (
        <div>
          Desc: {prod.desc} {", "} Price: {prod.price}
          <button onClick={() => dispatch(addDataAsync({ desc: prod.desc, price: prod.price }))}>
            Buy
          </button>


        </div>
      ))}
    </div>
  );
}

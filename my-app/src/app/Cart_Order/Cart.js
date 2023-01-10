import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import { selectCustomerProdList, getDataAsync, delDataAsync } from '../customerSlice';
import { selectMyCart, addItemToCart, deleteCart, removeItemFromCart } from './cartSlice'
import { addOrderAsync } from './orderSlice';
import { doSigninAsync, selectEmail, selectUserName, logout, selectToken, doSignupAsync, selectStaff } from '../Login/loginSlice'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageList from '@mui/material/ImageList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export function Cart() {
  const prodList = useSelector(selectCustomerProdList);
  // prodList name can be changed
  const dispatch = useDispatch();
  const myCart = useSelector(selectMyCart);
  const token = useSelector(selectToken);

  const CheckOut = ({ myCart, token }) => {
    console.log("hi")
    dispatch(addOrderAsync({ myCart, token }))
    dispatch(deleteCart())
  }

  return (
    <div >
      <h3 className="mt-4"><i>My selections</i></h3>


      <ImageList sx={{ width: "fixed", height: "fixed" }} cols={3} gap={12}>

        {myCart && myCart.map((prod) => (
          <div >

            <Card sx={{ width: "350px", height: "480px" , objectFit: "cover" }} >
              <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title=<i>{prod.desc}</i>
              // subheader={prod.price}
              />
              <img style={{ width: "250px", height: "250px" , objectFit: "cover" }} src={`https://project-patisserie.onrender.com/media/products/${prod.category_id}/${prod.image}`}></img>
              {/* <CardMedia
                component="img"
                height="194"
                image={prod.image}
              /> */}
              <br/><i>Price: </i>{prod.price}
              {/* <CardHeader subheader={prod.price}/> */}
              {/* <i>Total: </i>{prod.price}*{amount} */}
              <div>
                <button
                  onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, image: prod.image, amount: 1 ,total: 1}))}
                >
                  +
                </button>
                &nbsp; {prod.amount} &nbsp;
                <button
                  onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, image: prod.image, amount: -1, total: 1 }))}
                >
                  -
                </button>
              </div> <br />
              <i>Total: </i>{prod.total}<br/>
              <IconButton color="primary" aria-label="remove from cart" onClick={() => dispatch(removeItemFromCart(prod._id))}>
                Remove
              </IconButton>
              {/* <CardActions disableSpacing>
              </CardActions> */}


            </Card>
          </div>))
        }
      </ImageList>
      {myCart.length > 0 && <button onClick={() => dispatch(deleteCart())}>clear cart</button>}
      <br />
      <br />
      {!token && myCart.length === 0 && <div> <i><h5>GO TO "Menu" to add products</h5></i></div>}
      <Link to="/login">{!token && myCart.length > 0 && <div> <i><h5>GO TO Login\Register to check out</h5></i></div>}</Link>
      {token && myCart.length > 0 && <button onClick={() => CheckOut({ myCart, token })}>Check Out</button>}

    </div>
  );
}
export default Cart

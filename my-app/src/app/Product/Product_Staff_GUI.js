import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Outlet, Link, NavLink } from "react-router-dom";
import { getProductAsync, addProductAsync, delProductAsync, selectProdList, updProductAsync } from './productSlice';
import {  selectToken} from '../Login/loginSlice'
import { CartToSend } from '../Cart_Order/cartSlice'
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



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Product_Staff_GUI() {
  let params = useParams();
  let cat_id = params.id;
  const prodList = useSelector(selectProdList);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [change1, setChange1] = useState("false");
  const [change2, setChange2] = useState("0");
  const [change3, setChange3] = useState("0");



  //run every time we choose category
  useEffect(() => {
    if (cat_id) {
      dispatch(getProductAsync(cat_id));
    }
  }, [cat_id]);

  // how to perform use effect so each time when the data is updated- we will see it?
  useEffect(() => {
    dispatch(getProductAsync(cat_id))
  }, [change1, change2, change3])

  const refresh = () => { dispatch(getProductAsync(cat_id)) }

  return (

    <div >

{/* style={{ backgroundColor: "#fffae6", width: "fixed", height: "fixed" }} */}
      <h3 className="mt-4"><i>Our Products</i></h3>

      <div>
        <h5 className="mt-4"><i>Update\ Add new product</i></h5>
        <i>Description: </i>
        <input onChange={(e) => setDesc(e.target.value)} />
        <br />
        <br />
        <i>Price: </i>
        <input onChange={(e) => setPrice(e.target.value)} />
        <br /><br />
        <button
        onClick={() => {
          dispatch(addProductAsync({ prod: {desc: desc, price: price, category_id: cat_id}, token: token }))
          setChange3(desc)
        }}>Add New Product to the choosen category
      </button>
        <br />
        <br />
      </div>
      <ImageList cols={4} gap={12}>

        {prodList.map((prod) => (
          <div >

            <Card sx={{  width: "350px", height: "450px" , objectFit: "cover" }} >
              <CardHeader

                title=<i>{prod.desc}</i>
              />
              <img style={{ width: "250px", height: "250px" , objectFit: "cover" }} src={`https://project-patisserie.onrender.com/media/products/${prod.category_id}/${prod.image}`}></img>

              {/* <CardMedia
                component="img"
                height="194"
                image={prod.image}
              /> */}
              <CardHeader
                subheader={prod.price}
              />
              <IconButton color="primary" aria-label="delete" onClick={() => {
                dispatch(delProductAsync({ id: prod._id, token: token }))
                setChange2(prod._id)
              }
              }>
                DELETE
              </IconButton>

              <IconButton color="primary" aria-label="update" onClick={() => {
                desc ? (price ? dispatch(updProductAsync({ prod: {desc: desc, price: price}, id: prod._id, token: token })) :
                  dispatch(updProductAsync({ prod: {desc: desc}, id: prod._id, token: token }))) :
                  dispatch(updProductAsync({ prod: {price: price}, id: prod._id, token: token }))

                setChange1(price + desc)
              }

              }>
                UPDATE
              </IconButton>


            </Card>
          </div>))}
      </ImageList>
      <button
        onClick={() =>
          refresh()
        }>Refresh</button>

    </div>

  );
}

export default Product_Staff_GUI

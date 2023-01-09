import React, { useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryList, getCategoryAsync, addCategoryAsync, delCategoryAsync, updCategoryAsync } from './categorySlice'
import { selectToken } from '../Login/loginSlice'



const Category_Staff_GUI = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);
  const [desc, setDesc] = useState("");
  const token = useSelector(selectToken);
  const [newDesc, setNewdesc] = useState("");

  const [change1, setChange1] = useState("false");
  const [change2, setChange2] = useState("0");
  const [change3, setChange3] = useState("0");

  useEffect(() => {
    dispatch(getCategoryAsync())

  }, [change1, change2, change3])

  const refresh = () => { dispatch(getCategoryAsync()) }

  return (
    <div>

      <h3 className="mt-4"><i>Our Categories</i></h3>

      <h5 className="mt-4"><i>Update\ Add new category</i></h5>
      <i>Description: </i>
      <input onChange={(e) => setDesc(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addCategoryAsync({ cat: { desc: desc }, token: token }))
          setChange3(desc)
        }}>Add New Category
      </button>
      <br /><br />

      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          {categories.map((cat) => (

            <Link className="nav-link" key={cat._id} to={`/staffGUI/category_product/${cat._id}`}>{cat.desc}{" "}(Category ID:{" "} {cat._id} )
              <button onClick={() => {
                dispatch(delCategoryAsync({ id: cat._id, token: token }))
                setChange2(cat._id)
              }
              }>Delete</button>

              <button
                onClick={() => {
                  setChange1(desc)
                  dispatch(updCategoryAsync({ cat: { desc: desc }, id: cat._id, token: token }))
                }

                }>Update</button>

            </Link>

          ))}
        </li>
      </ul>
      <button
        onClick={() =>
          refresh()
        }>Refresh</button>
      <div>
        <Outlet></Outlet>
      </div>


    </div>

  )
}

export default Category_Staff_GUI
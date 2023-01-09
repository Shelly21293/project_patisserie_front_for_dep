import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {selectUserName,selectToken, selectStaff} from './app/Login/loginSlice'


const NavBar = () => {
    const isStaff= useSelector(selectStaff);
    const token = useSelector(selectToken);

    return (
        <div>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                {/* <div className="container-fluid"> */}
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/menu">MENU</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link " to="/cart">MyCart</Link>
                    </li>
                    {token && <li className="nav-item">
                        <Link className="nav-link " to="/myOrders">My orders</Link>
                    </li>}
                    <li className="nav-item">
                        <Link className="nav-link " to="/login">Login\Register</Link>
                    </li>
                   
                    {isStaff && <li className="nav-item">
                        <Link className="nav-link " to="/staffGUI">STAFF GUI</Link>
                    </li>}
                    {isStaff && <li className="nav-item">
                        <Link className="nav-link " to="/Admin">ADMIN WEB</Link>
                    </li>}
                </ul>
                {/* </div> */}
            </nav>
        </div>
    )
}

export default NavBar
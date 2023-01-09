import * as React from 'react';
import { doSigninAsync, selectEmail, selectUserName, logout, selectToken, doSignupAsync, selectStaff } from './Login/loginSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';




const Staff_GUI = () => {
    const userName = useSelector(selectUserName);
    
  
    
    return (<div class="w3-sand w3-grayscale w3-large" style={{ width: "fixed", height: "fixed" }}>
        <h3 className="mt-4"><i>Hi {userName}! please select your choice </i></h3>

        <div>

            <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-center">
                <ul className="navbar-nav ">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/staffGUI/add_new">Add New</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/staffGUI/category_product">Category\ Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/staffGUI/customers">Customers</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Staff_GUI
import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Header = () => {
    return (
        <div>

            <div className="p-3 text-black text-center">
                <Link className="nav-link" style={{ color : "black" }} to="/"><h1><i>Rose's Patisserie</i></h1></Link>
                
            </div>
        </div>
    )
}

export default Header
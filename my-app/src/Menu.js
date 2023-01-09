import React from 'react'
import Product from './app/Product/Product'
import Category from './app/Category/Category'


const Menu = () => {
    return (
        <div style={{ width: "fixed", height: "fixed"}}>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-2">
                        <Category></Category>
                    </div>
                    
                    <div className="col-sm-10">
                        <Product></Product>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu
import React from 'react'

const About = () => {
    return (
        <div >
{/* style={{ width: "fixed", height: "fixed" }} */}

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-2">


                    </div>
                    <div className="col-sm-8">
                        <div className="w3-container">
                            <div className="w3-content" >
                                <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
                                <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
                                <div className="w3-panel w3-leftbar w3-light-grey">
                                    <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                                    <p>Chef, Coffeeist and Owner: Liam Brown</p>
                                </div>
                                <img src="https://project-patisserie.onrender.com/media/about/chef1.jpeg" style={{ width: "100%", maxWidth: "1000px" }} className="w3-margin-top" />
                                <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
                                <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-2">


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import React from "react";
import { NavLink } from "react-router-dom";
// import Images from "./Images/cs.jpg";
const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex  align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">

                        
                            <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name}
                                    {/* Grow your Business With */}
                                    <strong className="brand-name"> DharmaTech</strong>
                                </h1>
                                <h2 className="my-3">We Are the team of Firefox Website

                                </h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btn-primary">
                                    {props.btname}</NavLink>
                                </div>

                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img
                                 src="./Images/rs.png"
                                 className="img-fluid animated" 
                                 alt="home img" />
                            </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Common;
import React from "react";
import { NavLink } from "react-router-dom";


let Home = function () {


    return (
        <div className="home">

            <div className="home__content">
                <div className="home__textBloc">
                    <h5 className="textBloc__heading5">SO, YOU WANT TO TRAVEL TO SPACE</h5>
                    <h1 className="textBloc__heading1">SPACE</h1>
                    <p className="textBloc__bodyText bodyText">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home__explore">
                    <NavLink to="/destinations"><div className="explore__text">EXPLORE</div></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home
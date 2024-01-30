import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
   return (
    <><div className="nav_div">
        <div className="head-div"><h1>Kabir Rajbhar </h1></div>
          <div className="nav_link">
            <NavLink className="link" activeClassName="nav_link" to={"*"}>Home</NavLink>
            <NavLink className="link" activeClassName="nav_link" to={"/services"}>Services</NavLink>
            <NavLink className="link" activeClassName="nav_link" to={"/contectus"}>ContectUs</NavLink>
            <NavLink className="link" activeClassName="nav_link" to={"/feedback"}>Feedback</NavLink>
          </div>
        </div>

    </>
   )
}
export default Navbar;
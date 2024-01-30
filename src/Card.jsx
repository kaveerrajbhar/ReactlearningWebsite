import React  from "react";
import { NavLink } from "react-router-dom";
const Card = (props)=>{

  return(
    <>
             <div className="content_div">
                  <img src={props.imagesrc} alt="image1"/>
                  <h1 className="text-center">{props.title}</h1>
                  <p className="text-center">{props.content}</p>
                  <NavLink to={props.visit} ><button  className="btn btn-outline-primary mt-3 w-auto">Explore</button></NavLink>
              </div>
    </>   
        )
      }
      export default Card;
        
         
             
    
              
       

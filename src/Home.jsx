import React from "react";
import web from '../src/images/Homepng.png'
const Home = ()=>{
  
  return(
    <><div className="home_container">
           <div className="first_inside_div">
           <h1 className="home_head">Grow your business with <br/><strong style={{color:"violet"}}>Web Development</strong></h1>
            <p className="home_head" style={{color:"black"}}>We are team of talanted developter making websites</p>
            <button type="submit" class="btn btn-outline-primary font-weight-bold w-50">Submit</button> 
           </div>
            <div className="second_inside_div">
                <img src={web} alt="kabir"/>
            </div>
            </div>
    </>
  )
}
export default Home;
           
            
            
    
            

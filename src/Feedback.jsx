import React from "react";

const Feedback = ()=>{
  return(
    <>
            <h1 className="text-center">Feedback</h1>
            <div className="container_feedback">
               
                   <textarea className="col-3 min-vh-20"></textarea>
                   <br/>
                   
            </div>
                    
           <center> <button type="submit" className="btn btn-outline-primary mt-3 w-25">Send</button> </center>
    </>
  )
}

export default Feedback;
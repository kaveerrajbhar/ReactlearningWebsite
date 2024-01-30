import React, { useState } from "react";

const ContectUs = ()=>{
  const [data,setData] = useState({
    fullname : "",
    lastname : "",
    email    : "",
    msg      : ""
  });  
  const InputEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
          return {...preVal,
                 [name]: value};
        })
  }
  const formSubmit = (e)=>{
     e.preventDefault();
    
}
  return(
    <>
   <form onSubmit={formSubmit}>        
  <div class="container w-50">
    <h1 className="text-center">Contact Us</h1>
    <div class="row">
      <div class="col-md-6">
      
        <div class="mb-3">
          <label for="fullName" class="form-label">Full Name</label>
          <input type="text" value={data.fullname} name="fullname" onChange={InputEvent} class="form-control" id="fullName"/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" value={data.lastname} name="lastname" onChange={InputEvent} class="form-control" id="lastName"/>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="text" value={data.email} name="email" onChange={InputEvent} class="form-control" id="email"/>
    </div>


    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" id="message" rows="4" name="msg" value={data.msg} onChange={InputEvent}></textarea>
    </div>
   
    <button type="submit" class="btn btn-outline-primary w-25">Submit</button> 
       
  </div>
  </form>
    </>
  )
}

export default ContectUs;
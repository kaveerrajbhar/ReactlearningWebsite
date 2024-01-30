import React  from "react";
import {ApiData} from './Api';
import Card from "./Card";
const Services = ()=>{

  return(
    <>  <h1 className="text-center">Our Services</h1>
        <div className="service_container">
        {ApiData.map((value,index)=>{
            return (
                <>
                    <Card  key={index}
                           imagesrc={value.imagesrc}
                           title  ={value.title}
                           content={value.content}
                           visit={value.visit}
                     />
                </>
                )

       })}
        </div>
       
    </>
        )
    }
    export default Services;
    
          
            
            
        
      
             
              
       

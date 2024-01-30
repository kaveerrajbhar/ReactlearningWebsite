import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css';
//import Services from "./Services";

ReactDOM.render(
     <><BrowserRouter>
          <App/>
     </BrowserRouter>
  </>,document.getElementById('root')
      );
   


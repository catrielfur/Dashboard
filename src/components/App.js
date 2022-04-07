import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
//import ContentWrapper from './ContentWrapper';

//import Chart from './Chart';
import Footer from './Footer';
import Product from './Product';
import Enrutador from './Routes';


//import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
         {/*  <ContentWrapper /> */}
                <div id="content">
               <TopBar />
            
            <Enrutador />
        
					  <Product />
            <Footer />
				  </div>
               </div>
               </div>    
           
            
          
    
    </React.Fragment>
  );
}

export default App;

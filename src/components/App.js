import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
/*import ContentRowTop from './ContentRowTop';*/  
import ContentRowCenter from './ContentRowCenter';

import Chart from './Chart';
import Footer from './Footer';


import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
            {/* <ContentWrapper /> */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

            
           
					<Chart />
				</div>
                    <Footer />
                </div>
            </div>    
          
        </div>
    </React.Fragment>
  );
}

export default App;

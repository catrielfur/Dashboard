import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ContentWrapper from './ContentWrapper';

import Chart from './Chart';
import Footer from './Footer';
import Product from './Product';


//import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
          <TopBar />
      	<div id="wrapper">
          <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
          <ContentWrapper />
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<Product />
				</div>
                    <Footer />
                </div>
            </div>    
          
        </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Route, Routes } from 'react-router-dom';
/* import LastMovieInDb from './LastMovieInDb'; */
import Product from './Product';
import ContentWrapper from "./ContentWrapper";
//import ContentRowTop from "./ContentRowTop";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import SearchProduct from './SearchProduct';
import Chart from "./Chart";
import Users from "./Users";
import OtroUser from "./OtroUser";
import ProductId from "./ProductId";

function enrutador () {
    return(
    <Routes>
              <Route path="/" exact={true} element={ <ContentWrapper />} />
              <Route path="/categorias" element={ <ContentRowMovies />} />
              <Route path="/listado-productos" element={ <Chart />} /> 
              <Route path="/ultimo-producto:id" element={ <LastMovieInDb />} /> 
              <Route path="/productos" element={ <Product /> } />
              <Route path="/producto-por-ID" element={ <ProductId /> } />

              <Route path="/buscar-producto" element={ <SearchProduct />} />
              <Route path="/usuarios" element={ <Users />} /> 
              <Route path="/usuarios" element={ <OtroUser />} /> 

              <Route path="*" element= {<NotFound />} />;
     
    </Routes>
    )

}
export default enrutador;

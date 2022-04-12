import React from "react";
import { Route, Routes } from 'react-router-dom';
import Product from './Product';
import ContentWrapper from "./ContentWrapper";
//import ContentRowTop from "./ContentRowTop";
import LastMovieInDb from "./LastMovieInDb";
import CategoriesInDb from './CategoriesInDb';
import NotFound from './NotFound';
//import SearchProduct from './SearchProduct';
//import Chart from "./Chart";
import Users from "./Users";
//import OtroUser from "./OtroUser";
import ProductId from "./ProductId";
import Usuarios from './Usuarios';
//import Usuario from './Usuario';

function Enrutador () {
    return(
    <Routes>
              <Route path="/" exact={true} element={ <ContentWrapper />} />;
              <Route path="/categorias" element={ <CategoriesInDb />} />;
 
              <Route path="/ultimo-producto:id" element={ <LastMovieInDb />} /> 
              <Route path="/listado-productos" element={ <Product /> } />;
              <Route path="/producto-por-ID" element={ <ProductId /> } />;
              {/* <Route path="/buscar-producto" element={ <SearchProduct />} /> */}
              <Route path="/usuarios" element={ <Usuarios />} />; 
              <Route path="/users" element={ <Users />} />; 
              {/*<Route path="/usuarios" element={ <OtroUser />} /> */}
              <Route path="*" element= {<NotFound />} />;
    </Routes>
    )
}
export default Enrutador;

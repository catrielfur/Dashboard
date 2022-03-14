import React from "react";
import { Route, Routes } from react-Route-dom;
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import ContentWrapper from "./ContentWrapper";
import ContentRowMovies from './ContentRowMovies';

function enrutador () {
    return(
    <Routes>
              <Route path="/" element={ <ContentWrapper />} />
              <Route path="/tabla-peliculas" element={ <ContentRowMovies />} />
              
              <Route path="/ultima-pelicula" element={ <div className="row"><LastMovieInDb /> </div>} />
              <Route path="/generos" element={ <GenresInDb /> } />
              
              {/* <Route path="*" element= { <p>404 - Not Found</p>}>; */}
     
          </Routes>
          )

}
export default enrutador;

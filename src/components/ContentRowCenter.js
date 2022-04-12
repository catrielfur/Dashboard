import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(props){
    //fetch("http://localhost:3000/products/ + {props.match.params.id"})
    return (
        <div className="row">
        <div className="container-fluid">
		<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <LastMovieInDb />
            <CategoriesInDb />
           

            </div>
            </div>
        </div>
    )
}

export default ContentRowCenter;
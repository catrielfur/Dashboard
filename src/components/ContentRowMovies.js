import React from 'react';
import SmallCard from './SmallCard';
import CuantityProducts from './CuantityProducts';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Productos en la base de datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-solid fa-car'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Usuarios', 
    color:'success', 
    cuantity: '79',
    icon:'fa-user-check'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Cantidad de productos' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-solid fa-stroopwafel'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;
import React from 'react';
import SmallCard2 from './SmallCard2';
//import CuantityProducts from './CuantityProducts';
//import TotalUsuarios from './TotalUsuarios';

/*  Cada set de datos es un objeto literal */

function ContentRowMovies(){
/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Productos en la base de datos',
    color: 'primary',
    cuantity: '13',
    icon: 'fa-solid fa-car'
}

/* <!-- Total users --> */

let totalUsers = {
    title:' Usuarios', 
    color:'success', 
    cuantity: 5,
    icon:'fa-user-check'
}

/* <!-- Categories --> */

let categories = {
    title:'Categorías' ,
    color:'warning',
    cuantity:'6',
    icon:'fa-solid fa-stroopwafel'
}

let cartProps = [productsInDB, totalUsers, categories];

    return (

<div className="row">
        {cartProps.map( (categories, i) => {
            return <SmallCard2 {...categories} key={i}/>
            
        })}
        </div>
    )
}

export default ContentRowMovies;
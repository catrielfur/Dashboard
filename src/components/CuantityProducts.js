import React from 'react';


function CuantityProducts(props){
    return(
        <tr>
        <td>{props.product.id}</td>
        <td>{props.product.name}</td>
        <td>{props.product.description}</td>
        <td>{props.product.brands_id}</td>
        <td>{props.product.price}</td>
        </tr>
    )
}
        
export default CuantityProducts;
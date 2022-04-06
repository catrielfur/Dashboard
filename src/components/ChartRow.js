import React from 'react';


function ChartRow(props){
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
        
export default ChartRow;
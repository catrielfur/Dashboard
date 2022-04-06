import React from 'react';

function productsList(props){
    return(
        <tr>
        <td>{props.product.id}</td>
        <td>{props.product.name}</td>
        <td>{props.product.description}</td>
        <td>{props.product.brands_id}</td>
        <td>{props.product.price}</ td>
        </tr>
    )
}
export default productsList;

/* import React, {Component} from 'react';
import Product  from './Product';

let products = [
        {
          "id": "req.query.id",
          "name": "AUDI Q5 xx",
          "description": "es un auto nuevo",
          "price": "100",
          "stock": 2,
          "categories_id": 2,
          "brands_id": 1,
          "colors_id": 1,
          "Modelos_id": 1
        }
] 

class ProductsInDb extends Component{
    constructor(){
        super()
        this.state = {
            productsList : []
        };
    };

    componentDidMount(){
        fetch('http://localhost:3000/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products => {
            //actualizamos el state QUE YA DEFINIMOS con los valores de la lista de genres
            //Si existe pisa el dato, si no existe la crea
            this.setState({productsList: products.data})
        })
        .catch(error => console.log(error))

    }
 changeBG(){
    const bkToApply = "bg-secondary"
    let divToChange = document.querySelector('#cardBody')
    if(divToChange.classList.contains(bkToApply)) {
        divToChange.classList.remove(bkToApply)
    } else {
        divToChange.classList.add(bkToApply)
    }
} 

    render() {

    return (

        <React.Fragment>
                
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">  
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver ={this.changeBG} >Productos en la base de datos</h6>
                        </div>
                        <div className="card-body" id='cardBody'>
                            <div className="row">
                                {
                                    this.state.productsList.map((product,index)=>{
                                        return  <Product  product={product.name}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
                )
            };
        };

                            
export default ProductsInDb;
 */
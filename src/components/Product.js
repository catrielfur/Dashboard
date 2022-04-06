import React, {Component} from 'react';

import ProductsList from './ProductsList';

class Product extends Component{
	constructor(){
        super()
        this.state = {
            productsList : []
        }
    }

	componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products => {	
            //console.log(genres)
            this.setState({productsList: products.data});
        })
        .catch(error => console.log(error))

    }
    render(){

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Listado de Productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Marca</th>
                                            <th>Precio</th>
										</tr>
									</thead>
									<tfoot>
		
									</tfoot>
									<tbody>
											{this.state.productsList.map((product, index) =>
												<ProductsList product={product} key={index}/>
										)}																												
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}}
export default Product;
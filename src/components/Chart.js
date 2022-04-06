import React, {Component} from 'react';
import ChartRow from './ChartRow';

class Chart extends Component{
	constructor(){
        super()
        this.state = {
            chartRow : []
        }
    }

	componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products => {	
            //console.log(genres)
            this.setState({ChartRow: products.data});
        })
        .catch(error => console.log(error))

    }
    render(){


        return(
            <React.Fragment>
                        {/*<!-- PRODUCTS LIST -->*/}
                        <h1 className="h3 mb-2 text-gray-800">Lista de Productos</h1>
                        
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
                                                {this.state.chartRow.map((product, index) =>
                                                    <ChartRow product={product} key={index}/>
                                            )}																												
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>            
            </React.Fragment>
        )
    }}

export default Chart;
import React, {Component } from 'react';

import UsuariosList from './UsuariosList';

class Usuarios extends Component{
	constructor(){
        super()
        this.state = {
            usuariosList : []
        }
    }

	componentDidMount(){
        fetch('http://localhost:3000/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users => {	
            //console.log(users)
            this.setState({usuariosList: users.data});
        })
        .catch(error => console.log(error))

    }
    render(){

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Listado de Usuarios en Base de Datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Alias</th>
                                            <th>Email</th>
                                            <th>Avatar</th>
										</tr>
									</thead>
									<tfoot>

									</tfoot>
									<tbody>
											{this.state.usuariosList.map((user, index) =>
												<UsuariosList user={user} key={index}/>
										)}																												
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}}
export default Usuarios;
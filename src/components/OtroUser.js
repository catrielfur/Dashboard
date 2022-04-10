/*import React, {Component} from 'react';

//import OtroUserList from './OtroUserList';
const url = "https://jsonplaceholder.typicode.com/users/";

class OtroUser extends Component{
    constructor(){
        super()
        this.state = {
            otroUserList : []
        }
    }
    componentDidMount(){
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )
    
        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
            //console.log(body)
        }}


    render(){
        
        return(
            <React.Fragment>
                        
                        <h1 className="h3 mb-2 text-gray-800">Listado de Productos</h1>
                        
                        
                        <div class="container mt-4 shadow-lg p-3 mb-5 bg-body rounded">
                                <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody id="data">
                                </tbody>
                                </table>
                            </div>
                                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

            </React.Fragment>
        )
    }}
    export default OtroUser;*/
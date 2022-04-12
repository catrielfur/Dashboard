import React, {Component} from 'react';
import Category from './Categories';

/* let categories = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
] */

class CategoriesInDb extends Component{
    constructor(){
        super()
        this.state = {
            categoriesList : []
        };
    };

    componentDidMount(){
        fetch('http://localhost:3000/api/categories')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(categories => {
            //console.log('hola categories', categories);
            //actualizamos el state QUE YA DEFINIMOS con los valores de la lista de categories
            //Si existe pisa el dato, si no existe la crea
            this.setState({categoriesList: categories.data});
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
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver ={this.changeBG}>Todas las categorias</h6>
                        </div>
                        <div className="card-body" id='cardBody'>
                            <div className="row">
                                {
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  category={category.name}  key={index} />
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

                            
export default CategoriesInDb;
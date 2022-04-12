//import React, { useState, useEffect, useRef} from 'react';

//import noPoster from '../assets/images/mandalorian.jpg';

//function SearchProduct(){

/* 	const movies = [
		{
			"Title": "Parchís",
			"Year": "1983",
			"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
		},
		{
			"Title": "Brigada en acción",
			"Year": "1977",
			"Poster": "N/A"
		},
	]; */

	
	// Credenciales de API
	/*const apiKey = 'e4f1918c'; // Intenta poner cualquier cosa antes para probar
	//Estados iniciales de las variables */
	//Modifico la keyword para buscar con un + en lugar del espacio
	//const url = 'http://localhost:3000/api/products'
/* 	let keywordForURL = (wordToReplace) => wordToReplace.replace(' ', '+');
	//Monto la url completa para buscar
	const urlAssembly = (wordToSearch) => `${url}?s=${keywordForURL(wordToSearch)}`
	
	//const keyword = 'action';
	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState('auto')
    useEffect(()=> {
		fetch(urlAssembly(keyword))
		.then(res=> res.json())
		.then(data => {
			setProducts(data);
		})
	},[keyword]) */

	/*const searchField = useRef();

	const search = (e) => {
		e.preventDefault()
		//console.log(searchField);
		setKeyword(searchField.current.value);
	}
	return(
		<div className="container-fluid">
			{
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">


							* Buscador *

							<form method="GET" onSubmit={search}>
								<div className="form-group">
									<label htmlFor="">Buscar por producto:</label>
										<input type="text" className="form-control" ref={searchField} />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Producto por la palabra: {keyword}</h2>
						</div>

						* Listado de productos *
						 {
							products.data > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.Poster}
														alt={product.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						} 
					</div>
					
				</>
				
				
			}
		</div>
	)
}

export default SearchProduct;*/

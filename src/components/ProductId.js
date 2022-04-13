let url= "http://localhost:3000/api/products";
const productsArray = [{url}]


function ProductId (props) {
    console.log(props)
   
    let id = (props.match.params.id)
    const product = productsArray.find(products => product.id === id);
    return(
        <div>
        {
            product &&
            <>
            <h2>{product.title}</h2>
            <p>Precio: ${product.price}</p>
            { <p>Categoría: {product.category}</p> }
            </>
        }
        {
            !product && <p> No hay productos con ese ID</p>

        }
        </div>
    )
}



export default ProductId;
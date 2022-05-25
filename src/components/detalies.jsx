let ProductDetails = (props) => {
    let product = props.product;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`images/${product.image}`}
                        className="img-fluid"
                        alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;
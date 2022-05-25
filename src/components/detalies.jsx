let ProductDetails = (props) => {
    console.log(props);
    let product = props.product;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`/images/${product[0].image}`}
                        className="img-fluid"
                        alt={product[0].name} />
                </div>
                <div className="col-md-6">
                    <h1>{product[0].name}</h1>
                    <p>{product[0].price}</p>
                    <p>{product[0].description}</p>
                    <button className="btn btn-primary" onClick={()=>props.history.push("/Home")}>Back To List</button>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;
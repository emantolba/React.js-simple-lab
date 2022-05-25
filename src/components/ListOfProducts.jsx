
let ListOfProducts =(props)=>{


 let products = props.products.map((product,i)=>{
  
     return(
        <tr>
            <td>
            {product.id}
         </td>
         <td>
             {product.name}
         </td>
         <td>
             {product.price}
         </td>
         <td>
             {product.quantity}
         </td>
         <td>
            <img src={`images/${product.image}`} 
            style={{width:100,height:100}}/>
            
         </td>
         <td>
             {product.description}
         </td>
         
         <td>
             <input type={'button'} value={'Details'} onClick={()=>{props.showdetailes(product);props.history.push(`/detailes/${product.id}`)}} className='btn btn-primary'/>
             <span> </span>
             <input type="button" value="Delete" className='btn btn-danger' onClick={()=>{
                 props.deleteProduct(i);
             }}/>
             <span> </span>
             <input type="button" value="Edit" className='btn btn-success' onClick={()=>{props.showdetailes(product);props.history.push(`/edit/${product.id}`)}}/>
         </td>
        </tr>
        );
    });

 
    return(
        <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {products}
            </tbody>
        </table>
       
        </div>
    );
}   
export default ListOfProducts;
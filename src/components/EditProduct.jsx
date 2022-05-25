import { Component } from "react";
class EditProduct extends Component {
    state={
        id:"",
        name:"",
        price:"",
        quantity:"",
        image:"",
        description:""
    
        }
       
        handelerInput=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            });
        }
        handelerSubmit=(e)=>{
            e.preventDefault();
            this.props.editProduct(this.state);
            this.props.history.push("/Home");
        }
    render() {
        console.log(this);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Edit Product</h3>
                    </div>
                    <div className="col-md-6">
                        <label>ID</label>
                        <input type="text" value={this.props.product.id} name="id" onChange={this.handelerInput}  className="form-control"/>
                        <input type="text" value={this.props.product.name} name="name" onChange={this.handelerInput} className="form-control" />
                        <input type="number" value={this.props.product.price} name="price" onChange={this.handelerInput} className="form-control" />
                        <input type="number" value={this.props.product.quantity} name="quantity" onChange={this.handelerInput}className="form-control" />
                        <input type="text" value={this.props.product.image} name="image" onChange={this.handelerInput}className="form-control" />
                        <textarea value={this.props.product.description} name="description" onChange={this.handelerInput}className="form-control" />
                        <button className="btn btn-primary" onClick={this.props.handelerSubmit}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditProduct;
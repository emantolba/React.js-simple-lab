import { Component } from "react";
class EditProduct extends Component {
    state={
        _id:this.props.product[0].id,
        _name:this.props.product[0].name,
        _price:this.props.product[0].price,
        _quantity:this.props.product[0].quantity,
        _image:this.props.product[0].image,
        _description:this.props.product[0].description
    
        }
       
        handelerInput=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            });
        }
        handelerSubmit=(e)=>{
            e.preventDefault();
            this.props.editProduct( {id:this.state._id,name:this.state._name,price:this.state._price,image:this.state._image,quantity:this.state._quantity , description:this.state._description});
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
                        <input type="text" value={this.state._id} name="_id" onChange={this.handelerInput}  className="form-control"/>
                        <input type="text" value={this.state._name} name="_name" onChange={this.handelerInput} className="form-control" />
                        <input type="number" value={this.state._price} name="_price" onChange={this.handelerInput} className="form-control" />
                        <input type="number" value={this.state._quantity} name="_quantity" onChange={this.handelerInput}className="form-control" />
                        <input type="text" value={this.state._image} name="_image" onChange={this.handelerInput}className="form-control" />
                        <textarea value={this.state._description} name="_description" onChange={this.handelerInput}className="form-control" />
                        <button className="btn btn-primary" onClick={this.handelerSubmit}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditProduct;
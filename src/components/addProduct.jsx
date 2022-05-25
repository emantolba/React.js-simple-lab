import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
class AddProduct extends  Component {
   
  state={
    _id:"",
    _name:"",
    _price:"",
    _quantity:"",
    _image:"",
    _description:""

    }
   
    handelerInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render(){
       // console.log(this);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Add Product</h1>
                       
                            <div className="form-group">
                                <label>ID</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state._id} 
                                onChange={this.handelerInput}
                                name="_id"/>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" 
                                className="form-control"
                                 value={this.state._name}
                                 onChange={this.handelerInput}
                                 name="_name" />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" 
                                className="form-control" value={this.state._price} name="_price" onChange={this.handelerInput}/>
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input type="number" 
                                className="form-control" value={this.state._quantity}  name="_quantity" onChange={this.handelerInput}/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input type="text" 
                                className="form-control" value={this.state._image}  name="_image" onChange={this.handelerInput} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea 
                                className="form-control" value={this.state._description}  name="_description" onChange={this.handelerInput}/>
                            </div>
                            
                             <button className="btn btn-primary" type="submit"
                                onClick={()=>{this.props.addref( {id:this.state._id,name:this.state._name,price:this.state._price,image:this.state._image,quantity:this.state._quantity , description:this.state._description});
                                this.props.history.push({pathname:'/Home'})}} >Add Product</button>
                        
                    </div>
                </div>
            </div>
        );
    }
    
}
export default withRouter(AddProduct);
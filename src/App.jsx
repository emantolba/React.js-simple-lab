import logo from './logo.svg';
import './App.css';
import ListOfProducts from './components/ListOfProducts';
import Header from './components/Header';
import ProductDetails from './components/detalies';
import React from 'react';
import AddProduct from './components/addProduct'; 
import Footer from './components/Footer';
class App extends React.Component {

 state={
        arryOfProducts : [
          {id:1,name:"Product 1",price:100,image:"1.jpg",quantity:100 , description:"This is product 1"},
          {id:2,name:"Product 2",price:200,image:"2.jpg",quantity:100 , description:"This is product 2"},
          {id:3,name:"Product 3",price:300,image:"3.jpg",quantity:100 , description:"This is product 3"},],
          showAddProduct:false,
          showProductDetails:false,
          detaiesId:"",
        };
      
     addNewProduct=(_product)=>{
       console.log(_product);
       let newArr=[...this.state.arryOfProducts,_product];
       console.log(newArr);
        this.setState({
            arryOfProducts: newArr
        });
     }
     deleteProductHandeler=(id)=>{
      let newArr=[...this.state.arryOfProducts];
      newArr.splice(id,1);
      this.setState({
          arryOfProducts:newArr
      });
    }
    showDetaiels=(i)=>{
      this.setState({
          detaiesId:i,
          showProductDetails:true
      });
    }
  render (){
    <input type="button" value="Add Product" onClick={()=>this.setState({showAddProduct:true})}/>
    if(this.state.showAddProduct){
      return(
        <div className="App">
          
          <Header />
          <input type="button" value="Back To List" onClick={()=>this.setState({showAddProduct:false})} className="btn btn-secondary"/>
           <AddProduct addref={this.addNewProduct} />
           <Footer />
        </div>
        );
    }
    else if(this.state.showProductDetails){
      return(
        <div className="App">
          <Header />
          <input type="button" value="Back To List" onClick={()=>this.setState({showAddProduct:false,showProductDetails:false})} className="btn btn-secondary"/>
          <ProductDetails product={this.state.arryOfProducts[this.state.detaiesId]}/>
          <Footer />

        </div>
          )
          }
    else
    {
      return(
       
        <div className="App">
          <Header />
          <input type="button" value="Add Product" onClick={()=>this.setState({showAddProduct:true})} className="btn btn-primary"/>

          <ListOfProducts products= {this.state.arryOfProducts} deleteProduct={this.deleteProductHandeler} showdetailes={this.showDetaiels}/>
          <Footer />

        </div>
        );
    }
      
    
    };
}

export default App;

import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddProduct from "./addProduct";
import ListOfProducts from "./ListOfProducts";
import Login from "./Login";
import ProductDetails from "./detalies";
import EditProduct from "./EditProduct";

class AppRouter extends Component {

    state={
        arryOfProducts : [
          {id:1,name:"Product 1",price:100,image:"1.jpg",quantity:100 , description:"This is product 1"},
          {id:2,name:"Product 2",price:200,image:"2.jpg",quantity:100 , description:"This is product 2"},
          {id:3,name:"Product 3",price:300,image:"3.jpg",quantity:100 , description:"This is product 3"},
          {id:4,name:"Product 4",price:400,image:"4.jpg",quantity:100 , description:"This is product 4"},
          {id:5,name:"Product 5",price:500,image:"5.jpg",quantity:100 , description:"This is product 5"},],
          showAddProduct:false,
          showProductDetails:false,
          detaiesId:"",
        };

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
          addNewProduct=(_product)=>{
            console.log(_product);
            let newArr=[...this.state.arryOfProducts,_product];
            console.log(newArr);
             this.setState({
                 arryOfProducts: newArr
             });
          }
          // CheckPhones(){
          //   return 
          // }
    render(){
        
            return(
               <>
               <Router>
                    
                    <Route component={Login}  path="/" exact/>
                    <Header/>
                    <Route component={(props)=> <ListOfProducts products= {this.state.arryOfProducts} {...props} deleteProduct={this.deleteProductHandeler} showdetailes={this.showDetaiels}/>}  path="/Home" exact />
                    <Route  component={(props)=> <AddProduct addref={this.addNewProduct} {...props} />} path="/add" exact/>
                    <Route component={(props)=>  <ProductDetails {...props} product={this.state.arryOfProducts[1]}/>} path="/detailes/:id" exact/>
                    <Route component={(props)=>  <EditProduct {...props} product={this.state.arryOfProducts[1]}/>} path="/edit/:id" exact/>
                    <Route component = {(props)=> <ListOfProducts products= {this.state.arryOfProducts.filter((product)=>{return product.id <4})} {...props} deleteProduct={this.deleteProductHandeler} showdetailes={this.showDetaiels}/>} path="/phones" exact/>
                    <Route component = {(props)=> <ListOfProducts products= {this.state.arryOfProducts.filter((product)=>{return product.id >3})} {...props} deleteProduct={this.deleteProductHandeler} showdetailes={this.showDetaiels}/>} path="/tv" exact/>

                </Router>
               </>
              
               
               
                )
        
    }
}
export default AppRouter;
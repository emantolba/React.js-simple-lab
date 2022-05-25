import { Component } from "react";
import { Router } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import AppRouter from "./AppRouter";
import ListOfProducts from "./ListOfProducts";
class Login extends Component {
  state = {
    AdminData: {
      Name: "Eman",
      Pass: 123,
    },
    LogInUser: false,
    txtuser: "",
    txtpass: "",
  };
  handlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubMitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
   
    if (
      this.state.AdminData.Name === this.state.txtuser &&
      this.state.AdminData.Pass === parseInt(this.state.txtpass)
    ) {
      this.setState({
        LogInUser: true,
      });
    }
  };
  render() {
    if (!this.state.LogInUser) {
      return (
        <form onSubmit={this.onSubMitHandler}>
          <span>userName</span>
          <input
            className="form form-control"
            type="text"
            value={this.state.txtuser}
            name="txtuser"
            onChange={this.handlerInput}
          />
          <span>Password</span>
          <input
            type="password"
            className="form form-control"
            value={this.state.txtpass}
            name="txtpass"
            onChange={this.handlerInput}
          />
          <input type={"submit"} value="LogIn" className="btn btn-primary" />
        </form>
      );
    } else {
        this.props.history.push("/Home");
      // return (
      //   <AppRouter/>
      // )
      
    }
  }
}

export default withRouter(Login);

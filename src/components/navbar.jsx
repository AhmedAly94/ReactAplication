import React, { Component } from "react";

//stateless functional component
/*const NavBar=()=> {

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }*/

class NavBar extends Component {
  render() {
    console.log("NavBar Rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }
}

export default NavBar;

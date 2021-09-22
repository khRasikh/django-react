import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import showList from "./components/TodosList";
import TodoCreateUpdate from "./components/TodoCreateUpdate";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import {RFooter} from './components/Home/index.components'; 
import './components/styles/app.css';
import Index from './components/Home/services'; 

const BaseLayout = () => (
  <>
  <div class="cover"> 
    {/* <RHeader></RHeader> */}
    <Navbar collapseOnSelect expand="lg" id="navbar">
      <Navbar.Brand href="/" id="menutitle">Main Page</Navbar.Brand>
      <Navbar.Brand href="/">
        <NavDropdown title="Exter Services" id="submenu">
          <NavDropdown.Item href="/service">Services</NavDropdown.Item>
          <NavDropdown.Item href="/two">Two</NavDropdown.Item>
          <NavDropdown.Item href="/three">Three</NavDropdown.Item>
          <NavDropdown.Item href="/four">Four</NavDropdown.Item>
          <NavDropdown.Item href="/five">Five</NavDropdown.Item>
        </NavDropdown> 
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand href="/">
        <Form inline>
          <FormControl id="search_id" type="text" placeholder="Search" className="mr-sm-3" />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
      
        <NavDropdown title="Language">
          <NavDropdown.Item href="/EN/">EN</NavDropdown.Item>
          <NavDropdown.Item href="/DE/">DE</NavDropdown.Item>
          <NavDropdown.Item href="/PE/">PE</NavDropdown.Item>
        </NavDropdown> 
      </Navbar.Collapse>
    </Navbar>
   </div>
    <div id="route_id"> 
      <Route path="/" exact component={showList} />
      <Route path="/create/" component={TodoCreateUpdate} />
      <Route path="/todos/:id" exact component={TodoCreateUpdate} />
      <Route path="/services/" exact component={Index} />
    </div>
    </>
);

class myServices extends Component{
  render(){
    return(
      <div>
        <Index/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
        <RFooter/>
      </BrowserRouter>
    );
  }
}

export default App;

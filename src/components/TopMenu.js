import React, { Component } from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import '../css/TopMenu.css';

class TopMenu extends Component {


  render() {
    return(

        /*<div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand>Zombie Survival Social Network</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/survivors-list">Survivors List</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/register-survivor"><button className="Sidemenu-button">Register Survivor</button></Link>
              </NavItem>
              <NavItem>
                <Link to="/reports"><button className="Sidemenu-button">Reports</button></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      */

      <div className="style">
          <Link to="/survivors-list"><button className="Sidemenu-button">Survivors List</button></Link>
          <Link to="/register-survivor"><button className="Sidemenu-button">Register Survivor</button></Link>
          <Link to="/reports"><button className="Sidemenu-button">Reports</button></Link>
          <Link to="/trade"><button className="Sidemenu-button">Trades</button></Link>
      </div>
    );
  }
}

export default TopMenu;

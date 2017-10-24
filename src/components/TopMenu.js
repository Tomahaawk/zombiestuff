import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/TopMenu.css';

class TopMenu extends Component {
  render() {
    return(
      <div className="style">
          <Link to="/survivors-list"><button className="Sidemenu-button">Survivors List</button></Link>
          <Link to="/register-survivor"><button className="Sidemenu-button">Register Survivor</button></Link>
          <Link to="/reports"><button className="Sidemenu-button">Reports</button></Link>
      </div>
    );
  }
}

export default TopMenu;

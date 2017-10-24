import React, { Component } from 'react';
import SurvivorList from './components/SurvivorList';
import CreateSurvivorPage from './components/pages/CreateSurvivorPage';
import TopMenu from './components/TopMenu';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Zombie Survival Social Network</h1>
          </header>
          <TopMenu />
          {this.props.children}
        </div>
    );
  }
}

export default App;

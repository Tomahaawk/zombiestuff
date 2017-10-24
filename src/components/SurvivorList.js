import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { survivorsFetch } from '../actions';
import SurvivorListItem from './SurvivorListItem';
import SearchBar from './SearchBar';
import '../css/SurvivorList.css'

class SurvivorList extends Component {
  componentWillMount() {
    this.props.survivorsFetch();
  }

  render() {

    return (
      <div className="Survivor-list-container">
        <SearchBar />
        <div className="Survivor-table-container">
          <table className="Survivor-table-style" id="myTable">
            <thead className="Survivor-table-header">
              <tr>
                <th style={{padding: 5}}>Name</th>
                <th>Age</th>
                <th>infected</th>
              </tr>
            </thead>
            <tbody>
              <SurvivorListItem survivors={this.props.survivorsList} onClick={this.props.onClick}/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({survivorList}) => {
  const survivorsList = _.map(survivorList.survivorsList, (data, uid) => {
    //returns all the fields inside object and adds an uid field
    return { ...data, uid };
  });

  return { survivorsList };
};

export default connect(mapStateToProps, { survivorsFetch })(SurvivorList);

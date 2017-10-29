import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Card } from 'reactstrap';
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
      <Card style={{height: `auto`}}>
        <div className="Survivor-list-container">
          <SearchBar />
          <div className="Survivor-table-container">
            <Table inverse hover striped id="myTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Infected</th>
                </tr>
              </thead>
              <tbody>
                <SurvivorListItem survivors={this.props.survivorsList} onClick={this.props.onClick}/>
              </tbody>
            </Table>
          </div>
        </div>
      </Card>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { survivorCreate } from '../actions';
import SurvivorForm from './SurvivorForm';

class SurvivorCreate extends Component {

  concatInventory({water, food, medication, ammunition}) {
    var inventoryItems = '';
    if(water > 0) {
      inventoryItems = inventoryItems + 'Water:'+ water + ';';
    }
     if (food > 0) {
      inventoryItems = inventoryItems + 'Food:' + food + ';';
    }
     if (medication > 0) {
      inventoryItems = inventoryItems + 'Medication:' + medication + ';';
    }
    if (ammunition > 0) {
      inventoryItems = inventoryItems + 'Ammunition:' + ammunition + ';';
    }

    return inventoryItems;
  }

  handleSubmit(values) {
    const { name, age, gender } = values;
    const { water, food, medication, ammunition } = values;
    const items = this.concatInventory({water, food, medication, ammunition});
    
    this.props.survivorCreate({ name, age, gender, items });
  }


  render() {
    return(
      <div>
        <SurvivorForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, age, gender, lonlat, items } = state.survivorForm;

  return { name, age, gender, lonlat, items };
};

export default connect(mapStateToProps, { survivorCreate })(SurvivorCreate);

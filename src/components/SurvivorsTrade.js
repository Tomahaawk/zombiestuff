import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Alert, Input, Button } from 'reactstrap';
import { inventoryFetch } from '../actions';
import TradeForm from './TradeForm';
import InventoryPanel from './InventoryPanel';
import '../css/SurvivorTrade.css';

class SurvivorsTrade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      survivor1Id:''
    };
  }

  updateIdField = (event) => {
    this.setState({
      survivor1Id: event.target.value
    });
  }

  fetchInventory(survivorId) {
    //TODO: Verify if he is infected and only continue if FALSE
    this.props.inventoryFetch(survivorId);
  }


  handleSubmit(values) {
    const { waterWanted, foodWanted, medicationWanted, ammunitionWanted } = values;
    const { waterOffered, foodOffered, medicationOffered, ammunitionOffered } = values;

    const valueOffered = this.calculateValues(waterOffered, foodOffered, medicationOffered, ammunitionOffered);
    const valueWanted = this.calculateValues(waterWanted, foodWanted, medicationWanted, ammunitionWanted);


    if(valueWanted === valueOffered) {
      //MAKE THE TRADE
    }

  }

  getItems() {
    const inventory = [];
    const items = this.props.itemsList;
    for(let i = 0; i < items.length; i++) {
      const qtd = items[i].quantity;
      const { item } = items[i];
      const obj = {quantity: qtd, name: item.name}
      inventory.push(obj);
    }

    return inventory;
  }


  calculateValues(water, food, medication, ammunition) {
    var itemsValue = 0;
    if(water > 0) {
      itemsValue = itemsValue + (water * 4);
    }
    if (food > 0) {
      itemsValue = itemsValue + (food * 3);
    }
    if(medication > 0) {
      itemsValue = itemsValue + (medication * 2);
    }
    if(ammunition > 0) {
      itemsValue = itemsValue + (ammunition * 1);
    }

    return itemsValue;
  }

  //TODO: fetch survivor info (name and if infected or not);

  render() {

    const survivorId = this.state.survivor1Id;

    return(
        <div className="Trade-container">
          <div className="Inventory-fetch-container">
            <div className="Inventory-id-input">
              <Input type="text" placeholder="Survivor 1 ID" onChange={event => this.updateIdField(event)}/>
              <Button className="Inventory-search-button" onClick={this.fetchInventory.bind(this, survivorId)}>Search</Button>
            </div>
            <div className="Inventory-items-container">
              <InventoryPanel itemsList={this.props.itemsList}/>
              <TradeForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>

          <div className="Inventory-fetch-container">
            <div className="Inventory-id-input">
              <Input type="text" placeholder="Survivor 2 ID" onChange={event => this.updateIdField(event)}/>
              <Button className="Inventory-search-button" onClick={this.fetchInventory.bind(this, survivorId)}>Search</Button>
            </div>
            <div className="Inventory-items-container">
              <InventoryPanel itemsList={this.props.itemsList} />
              <TradeForm />
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { survivorInventory } = state.inventory;
  const itemsList = _.map(survivorInventory, (data, uid) => {
    return { ...data, uid};
  })

  return { itemsList };
}

export default connect(mapStateToProps, { inventoryFetch })(SurvivorsTrade);

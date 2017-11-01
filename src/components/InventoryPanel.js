import React from 'react';
import { Table } from 'reactstrap';
import InventoryPanelItem from './InventoryPanelItem';

const InventoryPanel = (props) => {

  return(
    <div style={{width: 200}}>
      <Table inverse>
        <thead>
          <th>Item</th>
          <th>#</th>
        </thead>
        <tbody>
          <InventoryPanelItem itemsList={props.itemsList}/>
        </tbody>
      </Table>
    </div>
  );
}

export default InventoryPanel;

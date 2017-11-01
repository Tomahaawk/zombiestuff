import React from 'react';

const InventoryPanelItem = ({ itemsList }) => {
  const items = itemsList;
  const panelItems = items.map((item) =>
    <tr key={item.uid}>
      <th scope="row">{item.item.name}</th>
      <td>{item.quantity}</td>
    </tr>
  );
  return (panelItems);
}

export default InventoryPanelItem;

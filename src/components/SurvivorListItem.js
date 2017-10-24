import React, { Component } from 'react';
import '../css/SurvivorListItem.css';

class SurvivorListItem extends Component {

  render() {
    const survivors = this.props.survivors;
    const listItems = survivors.map((survivor) =>
      <tr id="tableRow" key={survivor.uid} data-item={survivor.location} onClick={this.props.onClick}>
        <td className="Table-header-row">{survivor.name}</td>
        <td className="Table-header-row">{survivor.age}</td>
        <td className="Table-header-row">{survivor["infected?"].toString()}</td>
      </tr>
    );
    return (listItems);
  }
}
export default SurvivorListItem;

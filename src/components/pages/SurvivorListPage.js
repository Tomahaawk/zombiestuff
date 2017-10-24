import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleSurvivorFetch, reportInfected } from '../../actions';
import SurvivorList from '../SurvivorList';
import SurvivorInfoPanel from '../SurvivorInfoPanel';

class SurvivorListPage extends Component {

  onClick = (event) => {
    const location = event.currentTarget.getAttribute('data-item');
    this.props.singleSurvivorFetch({location});
  }

  flagInfected = ({infectedId, flaggerId}, event) => {
    this.props.reportInfected({infectedId, flaggerId});
  }

  render() {
    return(
      <div style={styles.containerStyle}>
        <div>
          <SurvivorList onClick={this.onClick}/>
        </div>
        <div style={styles.survivorPanelStyle}>
          <SurvivorInfoPanel singleSurvivor={this.props.singleSurvivor} flagInfected={this.flagInfected}/>
        </div>
      </div>
    );
  }
}

//should be in a CSS file
const styles = {
  containerStyle: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row'
  },

  survivorPanelStyle: {
    justifyContent: 'center',
    flex: 1,
    padding: 20
  }

}

const mapStateToProps = ({survivorList}) => {
  const singleSurvivor = survivorList.singleSurvivor;
  return { singleSurvivor };

}

export default connect(mapStateToProps, { singleSurvivorFetch, reportInfected })(SurvivorListPage);

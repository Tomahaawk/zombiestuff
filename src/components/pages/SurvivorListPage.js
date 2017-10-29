import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { singleSurvivorFetch, reportInfected } from '../../actions';
import SurvivorList from '../SurvivorList';
import SurvivorInfoPanel from '../SurvivorInfoPanel';
import EmptySurvivorPanel from '../EmptySurvivorPanel';
import '../../css/SurvivorListPage.css';

class SurvivorListPage extends Component {

  onClick = (event) => {
    const location = event.currentTarget.getAttribute('data-item');
    this.props.singleSurvivorFetch({location});
  }

  flagInfected = ({infectedId, flaggerId}, event) => {
    this.props.reportInfected({infectedId, flaggerId});
  }

  renderSurvivorInfoPanel() {
    if(_.isEmpty(this.props.singleSurvivor)) {
      return(
        <EmptySurvivorPanel />
      );

    } else {
      return(
        <SurvivorInfoPanel singleSurvivor={this.props.singleSurvivor} flagInfected={this.flagInfected}/>
      );
    }
  }

  render() {
    console.log(this.props.singleSurvivor);
    return(
      <div className="Container-style-slp">
        <div className="Survivor-panel-style-slp">
          <SurvivorList onClick={this.onClick}/>
        </div>
        <div className="Survivor-panel-style-slp">
          {this.renderSurvivorInfoPanel()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({survivorList}) => {
  const singleSurvivor = survivorList.singleSurvivor;
  return { singleSurvivor };

}

export default connect(mapStateToProps, { singleSurvivorFetch, reportInfected })(SurvivorListPage);

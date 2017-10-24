import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { reportInfected } from '../actions';

class SurvivorInfoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      flaggerId: ''
    };
  }

//UPDATE STATES OF modalIsOpen e flggerId
  updateFlaggerId = (event) => {
    this.setState({flaggerId: event.target.value});
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {

    const { singleSurvivor } = this.props;
    const infectedId = singleSurvivor.id;
    const flaggerId = this.state.flaggerId;

    return(
      <div styles={styles.containerStyle}>
        <div style={styles.survivorInfoStyle}>
          <p style={styles.pStyle}>
            <text style={styles.textStyle}>SURVIVOR ID: </text>
            <text>{singleSurvivor.id}</text>
          </p>

          <p style={styles.pStyle}>
            <text style={styles.textStyle}>SURVIVOR NAME: </text>
            <text>{singleSurvivor.name}</text>
          </p>

          <p style={styles.pStyle}>
            <text style={styles.textStyle}>SURVIVOR LAST KNOWN LOCATION: </text>
            <text>{singleSurvivor.lonlat}</text>
          </p>
        </div>

        <div>
        <p>
            <button onClick={this.openModal}> Flag Infected </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={modalStyle}
            >
              <div>
                <text>Report {singleSurvivor.name} as indected</text>
                <p>
                  <text>Insert your ID to confirm your identity</text>
                </p>
                <input onChange={event => this.updateFlaggerId(event)} type="text" name="flaggerId"/>
              </div>
              <div>
                <button onClick={this.props.flagInfected.bind(this, {infectedId, flaggerId})}>Report</button>
              </div>
            </Modal>
          </p>
        </div>

    </div>
    );
  }
}

//should be is a CSS file
const modalStyle = {
  content: {
    top: '150px',
    left: '250px',
    right: '250px',
    bottom: '150px',
    padding: '20px'
  }
}

const styles = {
  containerStyle: {
    margin: 20,
    padding: 10,
  },

  survivorInfoStyle: {
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    marginLeft: 100
  },

  pStyle: {
    textAlign: 'left',
  },

  textStyle: {
    fontWeight: 'bold'
  }

}

export default SurvivorInfoPanel;

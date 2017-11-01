import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Input,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FullMap from './FullMap';

class SurvivorInfoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      flaggerId: ''
    };
  }

//UPDATE STATES OF modalIsOpen e flaggerId
  updateFlaggerId = (event) => {
    this.setState({flaggerId: event.target.value});
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  formatCoords = (lonLat) => {
      const newLonLatString = lonLat.replace('POINT ', '').replace(/[()]/g, '');
      const coordsString =  newLonLatString.split(" ");
      const latitude = Number(coordsString[0]);
      const longitude = Number(coordsString[1]);
      const coords = {latitude, longitude};

      return coords;

  }

  renderFullMap = (lonLat) => {
    if(lonLat !== null && lonLat !== undefined) {
      const coords = this.formatCoords(lonLat);

      return <FullMap input={coords} />;

    } else {
      return <text> Location Unknown </text>;
    }
  }

  render() {

    const { singleSurvivor } = this.props;
    const infectedId = singleSurvivor.id;
    const flaggerId = this.state.flaggerId;

    return(
      <div>
        <div>
          <Card style={styles.cardStyle}>
            <CardBody>
              <div style={styles.innerCardStyle}>
                <CardTitle>{singleSurvivor.name}</CardTitle>
                <CardSubtitle>{singleSurvivor.id}</CardSubtitle>
                <CardTitle style={{paddingTop: 20}}>Last known location</CardTitle>
              </div>
              <div style={{width: `100%`, height: `auto`, marginBottom: 20}}>
                {this.renderFullMap(singleSurvivor.lonlat)}
              </div>
              <div>
                <Button onClick={this.toggleModal} style={styles.buttonStyle}> Flag Infected </Button>
                <Link to={`/edit-survivor/${singleSurvivor.id}`}><Button style={styles.buttonStyle}> Edit </Button></Link>
              </div>
            </CardBody>
          </Card>
        </div>

        <div>
            <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal}>
              <ModalHeader>Report {singleSurvivor.name} as infected</ModalHeader>
              <ModalBody>
                <text>Insert your ID to confirm your identity</text>
                <Input onChange={event => this.updateFlaggerId(event)} type="text" name="flaggerId" />
              </ModalBody>
              <ModalFooter>
                <Button onClick={this.props.flagInfected.bind(this, {infectedId, flaggerId})} >Report</Button>
                <Button onClick={this.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </div>

    </div>
    );
  }
}

const styles = {
  containerStyle: {
    margin: 20,
    padding: 10,
  },

  cardStyle: {
    backgroundColor:`rgba(255,255,255,0.5)`
  },

  innerCardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },

  survivorInfoStyle: {
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    marginLeft: 100
  },

  buttonStyle: {
    margin: 5
  }

}

export default SurvivorInfoPanel;

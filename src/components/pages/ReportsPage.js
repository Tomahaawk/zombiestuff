import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import InfectedReportPanel from '../InfectedReportPanel';
import InventoryItemsReportPanel from '../InventoryItemsReportPanel';
import '../../css/ReportsPage.css';

const ReportsPage = () => {
  return(
    <div className="Container-style-rp">
      <h2 className="Header-style-rp">Surivivors Statistics</h2>
      <div className="Inner-container-style-rp">
        <CardGroup style={{marginBottom: 40}}>
          <Card className="Card-style-rp">
            <CardTitle>Infected People</CardTitle>
            <CardBody>
              <InfectedReportPanel />
            </CardBody>
          </Card>
          <Card className="Card-style-rp">
            <CardTitle>Items</CardTitle>
            <CardBody>
              <InventoryItemsReportPanel />
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}


export default ReportsPage;

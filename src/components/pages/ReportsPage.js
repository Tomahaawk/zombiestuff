import React from 'react';
import InfectedReportPanel from '../InfectedReportPanel';
import InventoryItemsReportPanel from '../InventoryItemsReportPanel';

const ReportsPage = () => {
  return(
    <div>
      <h2>Surivivors Statistics</h2>
      <div style={styles.containerStyle}>
        <div>
          <InfectedReportPanel />
        </div>
        <div>
          <InventoryItemsReportPanel />
        </div>
      </div>
    </div>
  );
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

export default ReportsPage;

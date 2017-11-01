import React from 'react';

const EmptySurvivorPanel = () => {
  return(
    <div style={{height: 600, background: `rgba(0,0,0,0)`}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: `inherit`}}>
            <text>Select a survivor</text>
          </div>
    </div>
  );
}

export default EmptySurvivorPanel;

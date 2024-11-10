import React from 'react';

function Alerts({ alert }) {
  return (
    <div className={`alerts ${alert ? 'active' : ''}`}>
      {alert ? <p>{alert}</p> : <p>No Alerts</p>}
    </div>
  );
}

export default Alerts;

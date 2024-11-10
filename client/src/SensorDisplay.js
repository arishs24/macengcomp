import React from 'react';

function SensorDisplay({ sensorValue }) {
  return (
    <div className="sensor-display">
      <h2>Current Sensor Value: {sensorValue}</h2>
      <p>Status: {sensorValue < 300 ? 'Detaching' : 'Secure'}</p>
    </div>
  );
}

export default SensorDisplay;

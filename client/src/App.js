import React, { useState, useEffect } from 'react';
import SensorDisplay from './SensorDisplay';
import EnzymeControl from './EnzymeControl';
import Alerts from './Alerts';
import Chart from './Chart';
import './App.css';

function App() {
  const [sensorValue, setSensorValue] = useState(500);
  const [alert, setAlert] = useState('');
  const [enzymeApplied, setEnzymeApplied] = useState(false);
  const [history, setHistory] = useState([]);

  // Simulate real-time sensor data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Math.floor(Math.random() * 700);
      setSensorValue(newValue);
      setHistory((prev) => [...prev.slice(-10), newValue]);

      if (newValue < 300) {
        setAlert('Warning: Adhesion Weakening!');
      } else if (newValue > 500 && enzymeApplied) {
        setAlert('Enzyme Application Successful');
      } else {
        setAlert('');
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [enzymeApplied]);

  return (
    <div className="App">
      <h1>Pacemaker Monitoring Dashboard</h1>
      <SensorDisplay sensorValue={sensorValue} />
      <Alerts alert={alert} />
      <EnzymeControl setEnzymeApplied={setEnzymeApplied} />
      <Chart data={history} />
    </div>
  );
}

export default App;

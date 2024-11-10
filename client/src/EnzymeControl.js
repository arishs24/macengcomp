import React from 'react';

function EnzymeControl({ setEnzymeApplied }) {
  const handleClick = () => {
    setEnzymeApplied(true);
    alert('Enzyme Released: Monitoring Detachment');
  };

  return (
    <div className="enzyme-control">
      <button onClick={handleClick}>Apply Enzyme</button>
    </div>
  );
}

export default EnzymeControl;

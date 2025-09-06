import React, { useState } from 'react';

const PriceToggle = () => {
  const [isPriceVisible, setIsPriceVisible] = useState(false);

  const togglePriceVisibility = () => {
    setIsPriceVisible(!isPriceVisible);
  };

  return (
    <div>
      <button onClick={togglePriceVisibility}>
        {isPriceVisible ? 'Hide Price' : 'Show Price'}
      </button>
      {isPriceVisible && <p>Price: $100</p>}
    </div>
  );
};

export default PriceToggle;
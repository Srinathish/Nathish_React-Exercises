import React, { useState } from 'react';

const ToggleMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide Component' : 'Show Message'}
      </button>
      {showMessage && <p>Hi! How are You!!!</p>}
    </div>
  );
};

export default ToggleMessage;

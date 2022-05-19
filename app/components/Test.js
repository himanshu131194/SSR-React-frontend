import React, { useEffect, useLayoutEffect, useState } from 'react';

export default () => {
  const [counter, setCouter] = useState('loading');

  const updateCounter = () => {
    setCouter('clicked');
  };

  useEffect(() => {
    console.log('useEffect is called');
    // setCouter('completed');
  }, []);

  return (
    <div onClick={updateCounter}>
      this is local test...........{`${counter}`}
    </div>
  );
};

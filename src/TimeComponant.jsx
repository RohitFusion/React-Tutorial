import { useState, useEffect } from 'react';

const DigitalClock = ({ color }) => {
  const [time, setTime] = useState('0');

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h3 style={{ color: color }}>{time}</h3>
    </>
  );
};

export default DigitalClock;

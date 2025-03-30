import React, { useState, useEffect } from 'react';
import './TimeDisplay.css';

function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get time in different time zones
  const getTimeInZone = (zone) => {
    return time.toLocaleTimeString('en-US', { timeZone: zone });
  };

  // Get date and day of week in different time zones
  const getDateInZone = (zone) => {
    const date = new Date(time.toLocaleString('en-US', { timeZone: zone }));
    return {
      date: date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      }),
      day: date.toLocaleDateString('en-US', { weekday: 'long' })
    };
  };

  return (
    <div className="time-display">
      <h1>US Time Zones</h1>
      <div className="other-timezones">
        <div className="timezone-box">
          <div className="timezone-label">Eastern Time</div>
          <div className="timezone-time">{getTimeInZone('America/New_York')}</div>
          <div className="timezone-date">{getDateInZone('America/New_York').day}</div>
          <div className="timezone-date">{getDateInZone('America/New_York').date}</div>
          <div className="market-hours">
            <div className="nyse-time">NYSE Market Hours:</div>
            <div className="nyse-schedule">9:30 AM - 4:00 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Central Time</div>
          <div className="timezone-time">{getTimeInZone('America/Chicago')}</div>
          <div className="timezone-date">{getDateInZone('America/Chicago').day}</div>
          <div className="timezone-date">{getDateInZone('America/Chicago').date}</div>
          <div className="market-hours">
            <div className="nyse-time">NYSE Market Hours:</div>
            <div className="nyse-schedule">8:30 AM - 3:00 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Mountain Time</div>
          <div className="timezone-time">{getTimeInZone('America/Denver')}</div>
          <div className="timezone-date">{getDateInZone('America/Denver').day}</div>
          <div className="timezone-date">{getDateInZone('America/Denver').date}</div>
          <div className="market-hours">
            <div className="nyse-time">NYSE Market Hours:</div>
            <div className="nyse-schedule">7:30 AM - 2:00 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Pacific Time</div>
          <div className="timezone-time">{getTimeInZone('America/Los_Angeles')}</div>
          <div className="timezone-date">{getDateInZone('America/Los_Angeles').day}</div>
          <div className="timezone-date">{getDateInZone('America/Los_Angeles').date}</div>
          <div className="market-hours">
            <div className="nyse-time">NYSE Market Hours:</div>
            <div className="nyse-schedule">6:30 AM - 1:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeDisplay; 
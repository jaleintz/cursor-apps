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
      <div className="other-timezones">
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
          <div className="timezone-label">London Time</div>
          <div className="timezone-time">{getTimeInZone('Europe/London')}</div>
          <div className="timezone-date">{getDateInZone('Europe/London').day}</div>
          <div className="timezone-date">{getDateInZone('Europe/London').date}</div>
          <div className="market-hours">
            <div className="nyse-time">LSE Market Hours:</div>
            <div className="nyse-schedule">8:00 AM - 4:30 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Frankfurt Time</div>
          <div className="timezone-time">{getTimeInZone('Europe/Berlin')}</div>
          <div className="timezone-date">{getDateInZone('Europe/Berlin').day}</div>
          <div className="timezone-date">{getDateInZone('Europe/Berlin').date}</div>
          <div className="market-hours">
            <div className="nyse-time">FSE Market Hours:</div>
            <div className="nyse-schedule">8:00 AM - 4:30 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Paris Time</div>
          <div className="timezone-time">{getTimeInZone('Europe/Paris')}</div>
          <div className="timezone-date">{getDateInZone('Europe/Paris').day}</div>
          <div className="timezone-date">{getDateInZone('Europe/Paris').date}</div>
          <div className="market-hours">
            <div className="nyse-time">Euronext Hours:</div>
            <div className="nyse-schedule">8:00 AM - 4:30 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Moscow Time</div>
          <div className="timezone-time">{getTimeInZone('Europe/Moscow')}</div>
          <div className="timezone-date">{getDateInZone('Europe/Moscow').day}</div>
          <div className="timezone-date">{getDateInZone('Europe/Moscow').date}</div>
          <div className="market-hours">
            <div className="nyse-time">MOEX Hours:</div>
            <div className="nyse-schedule">10:00 AM - 6:45 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Mumbai Time</div>
          <div className="timezone-time">{getTimeInZone('Asia/Kolkata')}</div>
          <div className="timezone-date">{getDateInZone('Asia/Kolkata').day}</div>
          <div className="timezone-date">{getDateInZone('Asia/Kolkata').date}</div>
          <div className="market-hours">
            <div className="nyse-time">NSE Market Hours:</div>
            <div className="nyse-schedule">9:15 AM - 3:30 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Shanghai Time</div>
          <div className="timezone-time">{getTimeInZone('Asia/Shanghai')}</div>
          <div className="timezone-date">{getDateInZone('Asia/Shanghai').day}</div>
          <div className="timezone-date">{getDateInZone('Asia/Shanghai').date}</div>
          <div className="market-hours">
            <div className="nyse-time">SSE Market Hours:</div>
            <div className="nyse-schedule">9:30 AM - 3:00 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Hong Kong Time</div>
          <div className="timezone-time">{getTimeInZone('Asia/Hong_Kong')}</div>
          <div className="timezone-date">{getDateInZone('Asia/Hong_Kong').day}</div>
          <div className="timezone-date">{getDateInZone('Asia/Hong_Kong').date}</div>
          <div className="market-hours">
            <div className="nyse-time">HKEX Market Hours:</div>
            <div className="nyse-schedule">9:30 AM - 4:00 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Tokyo Time</div>
          <div className="timezone-time">{getTimeInZone('Asia/Tokyo')}</div>
          <div className="timezone-date">{getDateInZone('Asia/Tokyo').day}</div>
          <div className="timezone-date">{getDateInZone('Asia/Tokyo').date}</div>
          <div className="market-hours">
            <div className="nyse-time">TSE Market Hours:</div>
            <div className="nyse-schedule">9:00 AM - 3:30 PM</div>
          </div>
        </div>
        <div className="timezone-box">
          <div className="timezone-label">Sydney Time</div>
          <div className="timezone-time">{getTimeInZone('Australia/Sydney')}</div>
          <div className="timezone-date">{getDateInZone('Australia/Sydney').day}</div>
          <div className="timezone-date">{getDateInZone('Australia/Sydney').date}</div>
          <div className="market-hours">
            <div className="nyse-time">ASX Market Hours:</div>
            <div className="nyse-schedule">10:00 AM - 4:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeDisplay; 
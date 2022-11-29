import { useState, useEffect } from 'react';
export const Timer = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); 
    useEffect(() => {
        const timer = setInterval(() => { 
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer);
      }
    }, []);
  
    const time: string = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
    return (
            <>
                <h2 className='timer'>{time}</h2>
            </>
        )
  };
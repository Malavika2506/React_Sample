import React from 'react'
import { useEffect } from 'react';

function Sampleusestate() {
     useEffect(() => {
          const timer = setInterval(() => console.log("Tick"),2000);
        
          return () => {
            clearInterval(timer);
            console.log("Timer Cleared");
          };
        }, []);
  return (
    <div>
        Hiiiii
    </div>
  )
}

export default Sampleusestate
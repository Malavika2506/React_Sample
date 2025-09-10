import React, { useEffect, useState } from 'react'


//Page Title Updater
function UseEffectProblems() {
    const[count, setCount] = useState(0);
    useEffect(() => {
        document.title =`You clicked ${count} times`;
    },[count]);

  return (
    <>
    <h1>Counter App</h1>
    <p>You clicked {count} times</p>
    <button onClick={()=>setCount(count+1)}>Click Me</button>
    </>
  );
}

export default UseEffectProblems
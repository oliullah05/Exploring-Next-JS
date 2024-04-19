"use client"

import { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(0)
    return (
        <>
             {counter} <br/>
      <button className=' btn btn-accent' onClick={()=>setCounter(counter+1)}>increase</button>  <br/>
      <button className=' btn btn-accent' onClick={()=>setCounter(counter-1)}>descrease</button>
        </>
    );
};

export default Counter;
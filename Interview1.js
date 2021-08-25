import React, {useState} from 'react';


export default function Interview1() {

    const[count, setCount]=useState(4);
    return (
        <div>
            <h1>{count}</h1>
            <h2>{you are welcome here1}</h2>
            <button onClick={()=>setCount(prestate=>prestate+1)}>Start</button>
        </div>
    )
}

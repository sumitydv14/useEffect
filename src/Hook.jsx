import React, { useState , useEffect } from 'react'

function Hook() {

     const [num , setNum] = useState(0);
     
     useEffect(() => {
        document.title=` You Clicked Me ${num} times`;
     },)

    return (
        <div>
            <button onClick={() =>{ setNum(num + 1) }}>Click Me  {num} </button>

        </div>
    )
}

export default Hook

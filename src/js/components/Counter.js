import React, {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div className="counter--box">
            <h3 className="count-holder">{count}</h3>
            <button className="count-btn" onClick={() => setCount(prev => prev +1)}>+</button>
            <button className="count-btn" 
                    disabled={count <= 0 ? true : false} 
                    onClick={() => setCount(prev => prev -1)}>-</button>
        </div>
    )
}
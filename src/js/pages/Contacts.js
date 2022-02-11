import React, {useState} from "react";

import Counter from "../components/Counter";


export default function Contacts(){

    const [isSaved, setIsSaved] = useState(false)
    const [result, setResult] = useState(0)

    function saveCount(count){
        setResult(count)
        setIsSaved(true)
    }

    return (
        <>
            {
                isSaved ?
                <>
                    <h4 className="main--title">You counted: {result}</h4>
                    <p className="main-subtitle">Great!!!</p>
                </>
                :
                <>
                    <h4 className="main--title">Let's do some counting</h4>
                    <p className="main-subtitle">Why not???</p>
                </>

            }
            <Counter saveCount={saveCount}/>
        </>
    )
}
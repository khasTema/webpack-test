import React, {useState, useEffect} from "react";


function About(){

    const [textData, setTextData] = useState([])

    useEffect(() => {
        fetch("https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum")
            .then(res => res.json())
            .then(data => setTextData(data))
    }, [])


    return (
        <>
            <h3 className="main--title">{textData.long_sentence}</h3>
            <p className="main-text">{textData.very_long_sentence}</p>
            <img src="https://random.imagecdn.app/500/150" />
            <p className="main-text">{textData.short_sentence}</p>
            <span className="main-subtitle">{textData.question}</span>
        </>
    )
}

export default React.memo(About)
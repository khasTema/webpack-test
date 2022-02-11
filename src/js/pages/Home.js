import React, {useState, useEffect} from "react";


export default function Home(){

    const [movieData, setMovieData] = useState([])
    const [movieNumber, setMovieNumber] = useState(1)

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${movieNumber}/`)
            .then(res => res.json())
            .then(data => setMovieData(data))

    }, [movieNumber])

    return (
        <>
            <h2 className="main--title">Some facts about Star Wars Movies</h2>
            <div className="movie-box">
                <h3>{movieData.title}</h3>
                <p>Director: {movieData.director}</p>
                <p>Producer: {movieData.producer}</p>
                <p>Release Date: {movieData.release_date}</p>
                <p>{movieData.opening_crawl}</p>
            </div>
            <button className="nexprev-btn"
                    onClick={() => setMovieNumber(prev => prev -1)}
                    disabled={movieNumber === 1}>Prev</button>
            <button className="nexprev-btn"
                    onClick={() => setMovieNumber(prev => prev +1)}
                    disabled={movieNumber === 6}>Next</button>
        </>
    )
}


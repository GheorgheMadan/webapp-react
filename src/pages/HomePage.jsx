// import del componente MovieCard
import MovieCard from "../components/MovieCard";

// import del useState e useEffect necessari per la gesione dello stato e degli effetti collaterali
import { useState, useEffect } from "react";

// import della libreria axios necessaria per le chiamate http
import axios from "axios";



// HomePage.jsx 
export default function HomePage() {

    const [movies, setMovies] = useState([]) // dichiarazione dello stato movies inizializzanto come array vuoto

    // funzione per ottenre i film dal servere eseguendo una chiamata http in get per ottenere tutti i film 
    function getMovies() {
        axios.get('http://localhost:3000/api/movies')
            .then(res => {
                console.log(res.data);
                setMovies(res.data)
            })
            .catch(err => console.error((err), "Failed to fetch movies")
            )
    }

    // utilizzo dell'hook useEffect per eseguire solo una volta la funzione getMovies all'avvio della pagina
    useEffect(() => getMovies(), []) // le quadre vuote indicano che la funzione verrà eseguita una sola volta

    return (
        <>
            <h1 className="text-primary fw-semibold">Bool Movies</h1>
            <div className="d-flex flex-wrap gap-4 mt-4 justify-content-center">
                {/* Utilizzo del metodo map per ciclare l'array movies e passare ad ogni iterazione il singolo film al componente MovieCard */}
                {movies.length === 0 ? <h2>Nessun film disponibile</h2> : movies.map(movie => <MovieCard key={movie.id} movieProp={movie} />)}
            </div>
        </>
    )
}
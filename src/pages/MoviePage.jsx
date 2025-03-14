// import del Link e useParams dalla libreria react-router-dom, useNavigate per la navigazione tra le pagine automatica
import { Link, useParams, useNavigate } from "react-router-dom";

// import axios per effettuare chiamate API
import axios from "axios";

// import del componente Review Card
import ReviewCard from "../components/ReviewCard";

// import del componente ReviewForm.jsx
import ReviewForm from "../components/ReviewForm";

// import del useState e useEffect
import { useState, useEffect } from "react";

import VoteStars from "../components/voteStars";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons'; // stella piena
// import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";  // stella vuota
// MoviePage.jsx
export default function MoviePage() {

    // estrapolazione del parametro id dalla url per recuperare il film in base all'id
    const { id } = useParams();

    // Utilizzo di useNavigate per la navigazione tra le pagine automatica in caso di errore
    const redirect = useNavigate();

    // Utilizzo di useState per salvare il film recuperato dalla chiamata API in get
    const [movie, setMovie] = useState({}); // inizializzazione dell'oggetto movie

    // Funzione per recuperare il film in base all'id effettuando una chiamata API con axios in get
    function getMovie() {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            });
    }

    const calculateAverageVote = () => {
        if (!movie.reviews || movie.reviews.length === 0) return 0; // Se non ci sono recensioni, la media è 0
        const totalVotes = movie.reviews.reduce((acc, review) => acc + review.vote, 0); // Somma dei voti
        return totalVotes / movie.reviews.length; // Media dei voti
    };

    // Utilizzo di useEffect per chiamare la funzion getMovie al caricamento della pagina evitando il loop infinito
    useEffect(() => getMovie(), [id]);

    return (
        <>
            <div className="mb-4">
                <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
            <div >
                <div className="row">
                    <div className="col-2">
                        <img src={movie.img || '/imgs/not-found-image.png'} className="card-img-top" alt={movie.title} style={{ width: "12rem" }} />
                    </div>
                    <div className="card-body col-10">
                        <h1 className="card-title">{movie.title}</h1>
                        <address className="text-secondary">By {movie.director}</address>
                        <p className="card-text">{movie.abstract}</p>
                        <address className="text-secondary">Genre: {movie.genre}, release year: {movie.release_year}</address>
                    </div>
                </div>
            </div >
            <h2 className="mt-4 mb-4">Our community reviews</h2>
            <h3>Vote Average {VoteStars(calculateAverageVote().toFixed(0))}</h3>
            {/* Map del componente ReviewCard */}
            {/* Applico la condizione nel caso non ci fossero recensioni disponibili */}
            {movie.reviews?.map(review => <ReviewCard key={review.id} reviewProp={review} />)}

            {/* COMPONENTE DEL FORM PER INSERIMENTO RECENSIONI  */}
            <ReviewForm movieId={movie.id} fetchMovie={getMovie} />
        </>
    )
}
// import della libreria React necessaria per le rotte, e useParams per ottenere i parametri passati nell'url
import { Link } from "react-router-dom"

// Importo la funzione useContext in modo da riportarmi l'array con i film 
import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

// Import di axios
import axios from "axios"

// installo npm install sweetalert2 per un UI piu carina della window confirm
// importo 
import Swal from 'sweetalert2';

// MovieCard.jsx 
export default function MovieCard({ movieProp, isAdmin }) {

    // Eseguo il destructuring dell'oggetto movieProp per ottenere i valori delle chiavi
    const { id, title, director, description, genre, release_year, img } = movieProp

    // Richiamo l'array di movies, e la funzione setMovies
    const { movies, setMovies } = useContext(GlobalContext)

    // FUNZIONE CHE ELIMINA IL POST AL CLICK
    function deleteMovie(movieID) {

        // Chiede conferma all'utente prima di eliminare il film, utilizzando il pacchetto Swal installato
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => { // Usa il .then per ottenere il risultato della conferma
            if (result.isConfirmed) {// Se l'utente ha confermato isConfirmed è una proprietà del pacchetto 
                const updatedMovies = movies.filter(movie => {
                    return movie.id !== movieID
                })
                axios.delete(`http://localhost:3000/api/movies/${movieID}`)
                    .then(res => setMovies(updatedMovies))
                    .catch(err => console.error(err)
                    )
            }
        })

    }


    return (
        <>
            <div className="card" style={{ width: "19rem" }}>
                <div className="d-flex justify-content-center mt-2">
                    <img src={img || "/imgs/not-found-image.png"} className="card-img-top" alt={title} style={{ width: "12rem" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <address className="text-secondary">By {director}</address>
                    <p className="card-text">{description}</p>
                    <address className="text-secondary">Genre: {genre}</address>
                    <address className="text-secondary">Relase year: {release_year}</address>
                    <div className="d-flex justify-content-between">
                        <Link to={isAdmin ? `movie/${id}` : `/admin-page/see-more/${id}`} className="btn btn-primary">See more</Link>
                        {/* Se isAdmin è true ovvero che se ci troviamo nella pagina AdminPage allora avremo il pulsante elimina altrimenti niente */}
                        {isAdmin ? <button className="btn btn-danger" onClick={() => deleteMovie(id)}>Delete</button> : null}
                    </div>
                </div>
            </div >
        </>
    )
}
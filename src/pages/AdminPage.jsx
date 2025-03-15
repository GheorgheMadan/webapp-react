// Importo la funzione useContext in modo da riportarmi l'array con i film 
import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
// Import MovieCard.jsx
import MovieCard from "../components/MovieCard"
import { Link } from "react-router-dom"

// AdminPage.jsx 
export default function AdminPage() {

    const { movies } = useContext(GlobalContext)

    return (
        <>
            <h1 className="text-primary fw-semibold">Reservation Area</h1>
            <Link to="/admin-page/create-new-movie"><button className="btn btn-success">Add Movie</button></Link>
            <div className="d-flex flex-wrap gap-4 mt-4 justify-content-center">
                {/* Utilizzo del metodo map per ciclare l'array movies e passare ad ogni iterazione il singolo film al componente MovieCard */}
                {/* Applico la condizione nel caso non ci fossero  i film   */}
                {movies.length === 0 ? <h2>Nessun film disponibile</h2> : movies.map(movie => <MovieCard key={movie.id} movieProp={movie} isAdmin={true} />)}
                {/* PASSO LA PROP isAdmin per poi aggiungere la condizione nel MovieCard per far si che appaia solo quando ci troviamo sulla AdminPage */}
            </div>
        </>
    )
}
// import della libreria React necessaria per le rotte, e useParams per ottenere i parametri passati nell'url
import { Link } from "react-router-dom"

// MovieCard.jsx 
export default function MovieCard({ movieProp }) {

    // Eseguo il destructuring dell'oggetto movieProp per ottenere i valori delle chiavi
    const { id, title, director, description, genre, release_year, img } = movieProp

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
                    <Link to={`movie/${id}`} className="btn btn-primary">See more</Link>
                </div>
            </div >
        </>
    )
}
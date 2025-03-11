// import della libreria React necessaria per le rotte
import { Link } from "react-router-dom"

// MovieCard.jsx 
export default function MovieCard() {
    return (
        <>
            <div class="card" style={{ width: "19rem" }}>
                <div className="d-flex justify-content-center mt-2">
                    <img src="http://localhost:3000/movies/imgs/inception.jpg" className="card-img-top" alt="nome-immagine" style={{ width: "12rem" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Inception</h5>
                    <address className="text-secondary">By Christopher Nolan</address>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <address className="text-secondary">Genre: Science Fiction</address>
                    <address className="text-secondary">Relase year: 2010</address>
                    <Link to="movie/:id" className="btn btn-primary">See more</Link>
                </div>
            </div >
        </>
    )
}
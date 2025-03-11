import { Link } from "react-router-dom"

// MovieCard.jsx 
export default function MovieCard() {
    return (
        <>
            <div class="card" style={{ width: "20rem" }} >
                <img src="http://localhost:3000/movies/imgs/inception.jpg" className="card-img-top" alt="nome-immagine" />
                <div className="card-body">
                    <h5 className="card-title">Inception</h5>
                    <address className="text-secondary">By Christopher Nolan</address>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, earum esse harum vero perspiciatis tempora, neque, mollitia corporis illum magnam fugit! Recusandae placeat blanditiis similique est perferendis deleniti tempora sit?.</p>
                    <address className="text-secondary">Genre: Science Fiction, relase year: 2010</address>
                    <Link to="movie/:id" className="btn btn-primary">See more</Link>
                </div>
            </div >
        </>
    )
}
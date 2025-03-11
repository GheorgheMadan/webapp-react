import { Link } from "react-router-dom";

// import dei componenti MovieCard e Review Card
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard";

// MoviePage.jsx
export default function MoviePage() {
    return (
        <>
            <div className="mb-4">
                <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
            <div >
                <div className="row">
                    <div className="col-2">
                        <img src="http://localhost:3000/movies/imgs/inception.jpg" className="card-img-top" alt="nome-immagine" style={{ width: "11rem" }} />
                    </div>
                    <div className="card-body col-10">
                        <h1 className="card-title">Inception</h1>
                        <address className="text-secondary">By Christopher Nolan</address>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, earum esse harum vero perspiciatis tempora, neque, mollitia corporis illum magnam fugit! Recusandae placeat blanditiis similique est perferendis deleniti tempora sit?.</p>
                        <address className="text-secondary">Genre: Science Fiction, relase year: 2010</address>
                    </div>
                </div>
            </div >
            <h2 className="mt-4 mb-4">Our community reviews</h2>
            < ReviewCard />
            < ReviewCard />
            < ReviewCard />
            < ReviewCard />
            < ReviewCard />
            < ReviewCard />
        </>
    )
}
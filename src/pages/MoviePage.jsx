// import dei componenti MovieCard e Review Card
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard";

// MoviePage.jsx
export default function MoviePage() {
    return (
        <>
            <h1>Sono la pagina del dettaglio movie e recensioni</h1>+
            <MovieCard />
            <ReviewCard />
        </>
    )
}
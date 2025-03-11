import MovieCard from "../components/MovieCard";

// HomePage.jsx 
export default function HomePage() {
    return (
        <>
            <h1 className="text-primary fw-semibold">Bool Movies</h1>
            <div className="d-flex flex-wrap gap-4 mt-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}
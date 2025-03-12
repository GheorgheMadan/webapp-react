// importo Link dal modulo react-router-dom
import { Link } from "react-router-dom";

// NotFoundPage.jsx 
export default function NotFoundPage() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-4">
            <h1>Page Not Found</h1>
            <p className="text-muted my-3">Sorry, but the page you are looking for does not exist.</p>
            <Link to='/' className="btn btn-primary">Back Home</Link>
        </div>
    )
}
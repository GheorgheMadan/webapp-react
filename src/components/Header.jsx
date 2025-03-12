import { Link } from "react-router-dom"

// Header.jsx
export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Bool Movies</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
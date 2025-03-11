import { Link } from "react-router-dom"

// Header.jsx
export default function Header() {
    return (
        <>
            <header>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Bool Movies</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
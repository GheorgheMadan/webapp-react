// import del Header.jsx
import Header from "../components/Header"

// import del Outlet per gestire le rotte figlie del DefaultLayout 
import { Outlet } from "react-router-dom"

// DefaultLayout.jsx
export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="container mt-4">
                <Outlet />
            </main>
        </>
    )
}
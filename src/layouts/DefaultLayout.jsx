// import del Header.jsx
import Header from "../components/header"

// import del Outlet per gestire le rotte figlie del DefaultLayout 
import { Outlet } from "react-router-dom"

// DefaultLayout.jsx
export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
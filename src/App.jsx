// import delle librerire necessarie per le rotte del app
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import del css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// import del Layout di default 
import DefaultLayout from "./layouts/DefaultLayout"

// import delle pagine 
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import NotFoundPage from "./pages/NotFoundPage"
import CreateMoviePage from "./pages/CreateMoviePage"
import SeeMoreAdminPage from "./pages/SeeMoreAdminPage"

// IMPORT DEL GLOBAL CONTEXT 
import GlobalContext from "./contexts/GlobalContext";

// IMPORT DEL useState
import { useState } from "react"
import AdminPage from "./pages/AdminPage"


function App() {

  const [movies, setMovies] = useState([])

  return (
    <>
      {/* passo il funzione setMovies, e l'array vuoto movies al global context da poterla utilizzare dentro HomePage.jsx */}
      <GlobalContext.Provider value={{ movies, setMovies }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index path="/" element={<HomePage />} />
              <Route path="movie/:id" element={<MoviePage />} />

              {/* Admin routes */}
              <Route path="admin-page" element={<AdminPage />} />
              <Route path="admin-page/create-new-movie" element={<CreateMoviePage />} />
              <Route path="admin-page/see-more/:id" element={<SeeMoreAdminPage />} />

              {/* La rotta "path='*'" cattura tutte le URL non definite in precedenza, reindirizzando l'utente a una pagina di errore (NotFoundPage). */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App

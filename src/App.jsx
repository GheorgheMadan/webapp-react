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

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="create-new-movie-post" element={<CreateMoviePage />} />
            {/* La rotta "path='*'" cattura tutte le URL non definite in precedenza, reindirizzando l'utente a una pagina di errore (NotFoundPage). È utile per gestire gli errori 404 e migliorare l'esperienza utente.*/}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

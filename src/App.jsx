// import delle librerire necessarie per le rotte del app
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

// import del Layout di default 
import DefaultLayout from "./layouts/DefaultLayout"

// import delle pagine 
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="movie/:id" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

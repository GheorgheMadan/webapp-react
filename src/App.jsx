// import delle librerire necessarie per le rotte del app
import { BrowserRouter, Router, Route } from "react-router-dom"

// import del Layout di default 
import DefaultLayout from "./layouts/DefaultLayout"

// import delle pagine 
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/"

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Router path="movie/:id" element={<MoviePage />} />
          </Route>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App

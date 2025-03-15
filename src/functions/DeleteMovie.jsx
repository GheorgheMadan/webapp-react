
// installo npm install sweetalert2 per un UI piu carina della window confirm
// importo 
import Swal from 'sweetalert2';

// Importo la funzione useContext in modo da riportarmi l'array con i film 
import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

// Import di axios
import axios from "axios"
// FUNZIONE CHE ELIMINA IL POST AL CLICK
export default function deleteMovie(movieID) {
    // Richiamo l'array di movies, e la funzione setMovies
    const { movies, setMovies } = useContext(GlobalContext)
    // Chiede conferma all'utente prima di eliminare il film, utilizzando il pacchetto Swal installato
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => { // Usa il .then per ottenere il risultato della conferma
        if (result.isConfirmed) {// Se l'utente ha confermato isConfirmed è una proprietà del pacchetto 
            const updatedMovies = movies.filter(movie => {
                return movie.id !== movieID
            })
            axios.delete(`http://localhost:3000/api/movies/${movieID}`)
                .then(res => setMovies(updatedMovies))
                .catch(err => console.error(err)
                )
        }
    })

}

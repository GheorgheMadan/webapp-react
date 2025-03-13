import { useState } from "react"

import axios from "axios"
// ReviewForm.jsx
export default function ReviewForm({ movieId, fetchMovie }) {

    // definizione dello stato iniziale del form
    const initialForm = {
        text: "",
        vote: 1,
        name: ""
    }

    // definizione dello stato del form
    const [form, setForm] = useState(initialForm)

    // funzione per gestire il cambiamento dei valori del form
    function changeForm(e) {

        // ESTRAPOLO IL NOME (il text, vote, name) E IL VALORE (il valore inserito dal cliente)  
        const { value, name } = e.target // e.target si riferisce all'elemento che ha scatenato l'evento, in questo caso l'input in cui l'utente sta scrivendo
        // AGGIORNO LO STATO DEL FORM
        setForm({
            ...form,
            // [name] si riferisce al nome dell'input, in questo caso text, vote, name
            [name]: value // value si riferisce al valore dell'input, in questo caso il valore inserito dall'utente
        })
    }

    // FUNZIONE per gestire l'invio del form 
    const submitForm = (e) => {
        e.preventDefault(); // previene il comportamento  di default del form, in questo caso il refresh della pagina
        // faccio una chiamata POST all'API per inviare la recensione al server utilizzando l'id del film a cui corrisponde la recensione
        axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, form)
            .then(() => {
                setForm(initialForm) // resetto il form dopo aver inviato la recensione in modo da avere i campi del form vuoti
                fetchMovie()    // richiamo la funzione fetchMovie per aggiornare la lista delle recensioni (funzione passata come props dalla pagina MoviePage) 
            })
            .catch(err => console.log(err, 'inserimento recensione fallito')) // in caso di errore stampo un messaggio di errore in console
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="review" className="form-label">Scrivi una recensione</label>
                    <input className="form-control" id="review"
                        type="text"
                        name="text"
                        value={form.text}
                        onChange={changeForm} /> {/* onChange è un evento che si scatena ogni volta che l'utente scrive qualcosa nell'input */}

                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input className="form-control" id="vote"
                        type="number"
                        name="vote"
                        min="1" max="5"
                        value={form.vote}
                        onChange={changeForm} /> {/* onChange è un evento che si scatena ogni volta che l'utente scrive qualcosa nell'input */}
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input className="form-control" id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={changeForm} /> {/* onChange è un evento che si scatena ogni volta che l'utente scrive qualcosa nell'input */}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
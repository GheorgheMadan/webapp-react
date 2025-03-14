import { useState } from "react"

import { useNavigate } from "react-router-dom";

import axios from "axios";

const initialFormData = {
    title: '',
    director: '',
    genre: '',
    release_year: '',
    abstract: '',
    image: null
}


// CreateMoviePage.jsx 
export default function CreateMoviePage() {

    // definizione dello stato del form
    const [form, setForm] = useState(initialFormData)

    // in modo che al invio del form mi riporti sulla pagina principale 
    const navigate = useNavigate()

    // FUNZIONE per gestire il cambiamento dei valori del form
    function changeValue(e) {

        // ESTRAPOLO IL NOME (il text, vote, name) E IL VALORE (il valore inserito dal cliente)  
        const { value, name } = e.target; // e.target si riferisce all'elemento che ha scatenato l'evento, in questo caso l'input in cui l'utente sta scrivendo
        // Se il tipo dell'input è 'image', aggiorno lo stato del form impostando direttamente il file selezionato dall'utente
        if (name === 'image') setForm({ ...form, image: e.target.files[0] })
        // Se il tipo dell'input NON è 'image', aggiorno lo stato del form con il valore dell'input corrente
        else setForm({ ...form, [name]: value });
    }

    // FUNZIONE per gestire l'invio del form 
    function submit(e) {
        e.preventDefault() // previene il comportamento  di default del form, in questo caso il refresh della pagina

        axios.post('http://localhost:3000/api/movies', form, { headers: { "Content-Type": "multipart/form-data" } })
            .then(() => navigate('/'))
            .catch(err => console.error(err, 'Creazione fallita')
            )
    }

    return (
        <>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={changeValue}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Director</label>
                    <input className="form-control"
                        type="text"
                        name="director"
                        value={form.director}
                        onChange={changeValue} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input className="form-control"
                        type="text"
                        name="genre"
                        value={form.genre}
                        onChange={changeValue} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Release Year</label>
                    <input className="form-control"
                        type="number"
                        name="release_year"
                        value={form.release_year}
                        onChange={changeValue} />
                </div>
                <div className="form-floating">
                    <label>Abstract</label>
                    <textarea className="form-control" style={{ height: "100px" }}
                        name="abstract"
                        value={form.abstract}
                        onChange={changeValue}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input className="form-control"
                        type="file"
                        name="image"
                        onChange={changeValue}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </>
    )
}
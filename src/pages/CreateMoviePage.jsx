// CreateMoviePage.jsx 
export default function CreateMoviePage() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        className="form-control"
                        type="text"
                    />
                </div>
                <div class="mb-3">
                    <label className="form-label">Director</label>
                    <input className="form-control"
                        type="text" />
                </div>
                <div class="mb-3">
                    <label className="form-label">Release Year</label>
                    <input className="form-control"
                        type="number" />
                </div>
                <div className="form-floating">
                    <label>Abstract</label>
                    <textarea className="form-control" style={{ height: "100px" }} />
                </div>
                <div class="mb-3">
                    <label className="form-label">Image:</label>
                    <input className="form-control"
                        type="file" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form >
        </>
    )
}
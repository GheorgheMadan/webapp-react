
import VoteStars from './voteStars';

// ReviewCard.jsx
export default function ReviewCard({ reviewProp }) {

    const { name, text, vote } = reviewProp


    return (
        <>
            {reviewProp.length === 0 ? <h3>Nessuna recensione disponibile</h3> :
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            {text || 'No review available'}
                        </p>
                        <span>Vote: {VoteStars(vote)}</span>
                        <address>
                            <i>
                                By {name || 'Anonymous'}
                            </i>
                        </address>
                    </div>
                </div>}
        </>
    )
}
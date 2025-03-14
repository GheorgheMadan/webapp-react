import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // stella piena
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";  // stella vuota


export default function VoteStars(vote) {

    return (
        <>
            <strong>
                <span>{vote >= 1 ? <FontAwesomeIcon className="text-warning" icon={faStar} /> : <FontAwesomeIcon className="text-light" icon={faStar} />}</span>
                <span>{vote >= 2 ? <FontAwesomeIcon className="text-warning" icon={faStar} /> : <FontAwesomeIcon icon={farStar} className="text-light" />}</span>
                <span>{vote >= 3 ? <FontAwesomeIcon className="text-warning" icon={faStar} /> : <FontAwesomeIcon icon={farStar} className="text-light" />}</span>
                <span>{vote >= 4 ? <FontAwesomeIcon className="text-warning" icon={faStar} /> : <FontAwesomeIcon icon={farStar} className="text-light" />}</span>
                <span>{vote >= 5 ? <FontAwesomeIcon className="text-warning" icon={faStar} /> : <FontAwesomeIcon icon={farStar} className="text-light" />}</span>
            </strong>
        </>
    )
}
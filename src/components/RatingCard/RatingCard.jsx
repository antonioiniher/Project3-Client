import { ProgressBar } from "react-bootstrap"
import './RatingCard.css'

const RatingCard = ({ rating }) => {
    let sumRating = 0
    rating.forEach(e => {
        sumRating += e.value
    })
    let avgRating = sumRating / rating.length

    return (
        <div>
            <h1 className="titleRating">Rating</h1>
            <ProgressBar className="custom-progress-bar" label={`${avgRating}`} animated now={avgRating} min={1} max={10} />
        </div>
    )

}

export default RatingCard
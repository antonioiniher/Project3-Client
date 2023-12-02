import { ProgressBar } from "react-bootstrap"
import './RatingCard.css'

const RatingCard = ({ rating }) => {
    let sumRating = 0
    rating.forEach(e => {
        sumRating += e.value
    })
    let avgRating = sumRating / rating.length

    return (
        <ProgressBar label={`${avgRating}`} animated now={avgRating} min={1} max={10} />
    )

}

export default RatingCard
import Calendar from './../../components/Calendar/Calendar'
import { Container } from "react-bootstrap"


const CalendarPage = () => {
    return (
        <div className="CalendarPage">
            <Container>
                <h1>Calendario</h1>
                <hr />
                <Calendar />
            </Container>
        </div>
    )
}

export default CalendarPage
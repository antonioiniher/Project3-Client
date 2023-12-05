
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"

        />
    )


}




export default Calendar

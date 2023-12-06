import React, { useContext, useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'
import classService from './../../services/Class.services'

const Calendar = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        classService
            .getClassByTeacher()
            .then(({ data }) => {
                const modifiedEvents = data.booking.map((event) => ({
                    title: event.students.username,
                    start: new Date(event.date),
                    status: event.status,
                    color: event.status === 'Accepted' ? 'green' : (event.status === 'Pending' ? 'yellow' : 'red'),
                    time: new Date(event.date).toLocaleTimeString('es-ES', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    }),
                }))
                setEvents(modifiedEvents)
            })
            .catch((error) => console.log(error))
    }

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
                left: 'title',
                // center: 'title',
                // right: 'dayGridMonth, timeGridWeek, timeGridDay',
            }}
            locale={esLocale}
            dayHeaderFormat={{ weekday: 'long' }}
            firstDay={1}
        />
    )
}

export default Calendar

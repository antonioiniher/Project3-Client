import { Container } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import classService from "../../services/Class.services"
import { AuthContext } from "../../contexts/auth.context"
import "./StudentClassesList.css"
import arrowsDown from "../../assets/icon-chevrons-down.svg"

const StudentClassesList = () => {

  const [classes, setClasses] = useState([])
  const { loggedUser } = useContext(AuthContext)

  useEffect(() => {
    loadClasses()
  }, [])

  const loadClasses = () => {

    classService
      .getClassByStudent(loggedUser._id)
      .then(({ data }) => {
        setClasses(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <h3 className="titleTable">Clases a las que estoy apuntado</h3>
      {
        classes
        &&
        <div className="customTable">
          <div className="tableHeader">
            <div className="headerTitle">Nombre de la clase</div>
            <div className="headerStatus">Fecha de la reserva</div>
            <div className="headerStatus">Estado de la reserva</div>
          </div>
          <div className="tableBody">
            {
              classes.map(e => (
                <div className="tableRow" key={e.id}>
                  <div className="rowTitle">{e.title}</div>
                  <div className="rowStatus">
                    {e.booking.map((elm, i) =>
                      elm.students === loggedUser._id ? (
                        <>
                          <div className="statusItem" key={i}>{elm.status}</div>
                          <div className="statusItem" key={elm}>
                            {new Date(elm.date).toLocaleString('es-ES', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                              hour: 'numeric',
                              minute: 'numeric',
                              hour12: false
                            })}
                          </div>


                        </>

                      ) : null
                    )}
                  </div>
                </div>
              ))
            }
          </div>
        </div>


      }
    </Container>
  )
}

export default StudentClassesList
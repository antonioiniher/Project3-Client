import { useContext, useEffect, useState } from "react"
import { Container, Button } from "react-bootstrap"

import classService from "../../services/Class.services"
import Loader from "../Loader/Loader"

const TeacherClassesList = () => {

  const [classes, setClass] = useState()

  useEffect(() => {
    loadClass()
  }, [])

  const loadClass = () => {

    classService
      .getClassByTeacher()
      .then(({ data }) => {
        setClass(data)
      })
      .catch(error => console.log(error))
  }

  const setStatusToAccept = (classes_id, student_id) => {

    classService
      .searchClassAndAccept(classes_id, student_id)
      .then(() => navigate('/perfil'))
      .catch(error => console.log(error))
  }

  const setStatusToDecline = e => {


  }

  return (
    classes
      ?
      <Container>
        <h3>Historial de solicitudes de estudiantes para la clase de {classes.title}</h3>
        <hr />
        {
          classes.booking.length > 0
            ?
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre del alumno </th>
                  <th scope="col">Estado de la reserva</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {
                  classes.booking.map(elm => {
                    return (
                      <tr>
                        <td>{elm.students.username}</td>
                        <td>{elm.status}</td>
                        <td>
                          {
                            elm.status === 'Pending'
                              ?
                              <>
                                <Button variant="dark" onClick={() => setStatusToAccept(classes._id, elm.students._id)}>Aceptar</Button>
                                <Button variant="warning" onClick={setStatusToDecline}>Cancelar</Button>
                              </>

                              :
                              <div>adios</div>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

            :
            <div>No hay solicitudes</div>
        }
      </Container>
      :
      <div>No hay solicitudes</div>
  )
}

export default TeacherClassesList
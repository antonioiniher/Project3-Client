import { Container } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import classService from "../../services/Class.services"
import { AuthContext } from "../../contexts/auth.context"


const UserClassesList = () => {

  const [classes, setClasses] = useState([])
  const { loggedUser } = useContext(AuthContext)

  useEffect(() => {
    loadClasses()
  }, [])

  const loadClasses = () => {

    classService
      .getClassByStudent(loggedUser._id)
      .then(({ data }) => {
        console.log(data)
        setClasses(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <h3>Clases a las que estoy apuntado</h3>
      {
        classes
        &&
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre de la clase</th>
              <th scope="col">Descripción</th>
              <th scope="col">Estado de la reserva</th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map(e => {
                return (
                  <tr>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td>{e.booking?.status}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      }
    </Container>
  )
}

export default UserClassesList
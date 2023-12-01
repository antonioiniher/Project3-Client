import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"

import classService from "../../services/Class.services"
import { AuthContext } from "../../contexts/auth.context"
import Loader from "../Loader/Loader"

const TeacherClassesList = () => {

    const [classes, setClass] = useState()
    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadClass()
    }, [])

    const loadClass = () => {

        classService
            .getClassByTeacher()
            .then(({ data }) => {
                setClass(data)
                console.log('data')
            })
            .catch(error => console.log(error))
    }

    return (
        classes
            ?
            <Container>
                <h3>Historial de solicitudes de estudiantes para la clase de {classes.title}</h3>
                <hr />
                {

                }
            </Container>
            :
            <Loader />
    )
}

export default TeacherClassesList
import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import classService from "../../services/Class.services"

const UserClassesList = ({ user_id }) => {

    const [classes, setClasses] = useState([])


    useEffect(() => {
        loadClasses()
    }, [])

    const loadClasses = () => {

        classService
            .getClassByStudent(user_id)
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
                ??
                classes.map(e => {
                    return (
                        <p>{e.title}</p>
                    )
                })
            }
        </Container>


    )

}

export default UserClassesList
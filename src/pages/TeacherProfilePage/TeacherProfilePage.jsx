import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import userService from './../../services/User.services'
import Loader from "../../components/Loader/Loader"
import { Container } from "react-bootstrap"
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard"
import CommentForm from "../../components/CommentForm/CommentForm"


const TeacherProfilePage = () => {

    const [user, setUser] = useState()
    const { owner_id } = useParams()

    useEffect(() => {
        loadTeacher()
    }, [])

    const loadTeacher = () => {
        userService
            .profile(owner_id)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(error => console.log(error))
    }

    return (
        user
            ?
            <Container>
                <h1> Perfil profesor {user.username}  </h1>
                <UserProfileCard {...user} key={user._id} />
                <CommentForm />
            </Container>
            :
            <Loader />
    )
}

export default TeacherProfilePage
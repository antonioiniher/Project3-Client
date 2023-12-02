import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import userService from './../../services/User.services'
import Loader from "../../components/Loader/Loader"
import { Container, Row } from "react-bootstrap"
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard"
import CommentForm from "../../components/CommentForm/CommentForm"
import RatingForm from "../../components/RatingForm/RatingForm"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import CommentCard from "../../components/CommentCard/CommentCard"
import commentService from "../../services/Comment.services"
import "./TeacherProfilePage.css"

const TeacherProfilePage = () => {

    const [commentList, setCommentList] = useState([])
    const { loggedUser } = useContext(AuthContext)
    const [user, setUser] = useState()
    const { owner_id } = useParams()

    useEffect(() => {
        loadTeacher()
        loadComments()
    }, [])

    const loadTeacher = () => {
        userService
            .profile(owner_id)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(error => console.log(error))
    }

    const loadComments = () => {

        commentService
            .getCommentsByTeacher(owner_id)
            .then(({ data }) => {
                setCommentList(data)
            })
            .catch(err => console.log(err))

    }

    if (!user) {
        return <Loader />
    }

    return (

        <Container>
            <h1 className="profileTeacher"> Perfil de {user.username}  </h1>
            <UserProfileCard {...user} key={user._id} />
            <Row>
                <CommentCard commentList={commentList} />
            </Row>
            {
                loggedUser &&
                <>
                    <CommentForm loadComments={loadComments} />
                    <RatingForm />
                </>
            }
        </Container>

    )
}

export default TeacherProfilePage
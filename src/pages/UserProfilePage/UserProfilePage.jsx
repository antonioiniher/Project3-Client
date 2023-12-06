import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/User.services"
import { Container } from "react-bootstrap"
import "./UserProfilePage.css"
import Loader from "../../components/Loader/Loader"
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard"
import StudentClassesList from "../../components/StudentClassesList/StudentClassesList"
import TeacherClassesList from "../../components/TeacherClassesList/TeacherClassesList"
import iconEdit from "../../assets/icon-edit.svg"
import iconThrash from "../../assets/icon-trash-2.svg"


const UserProfilePage = () => {

  const { loggedUser } = useContext(AuthContext)
  const [user, setUser] = useState()

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {

    userService
      .profile(loggedUser._id)
      .then(({ data }) => {
        setUser(data)
      })
      .catch(err => console.log(err))
  }

  return (

    user
      ?

      <Container>
        <img src={iconEdit} alt="iconEdit" className="iconEdit" />
        <img src={iconThrash} alt="iconTrash" className="iconTrash" />

        <UserProfileCard {...user} key={user._id} />
        {
          loggedUser?.role === 'STUDENT'
          &&
          <StudentClassesList />
        }
        {
          loggedUser?.role === 'TEACHER'
          &&
          <TeacherClassesList />
        }





      </Container>
      :
      <Loader />
  )

}

export default UserProfilePage
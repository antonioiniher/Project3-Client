import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/User.services"
import { Container } from "react-bootstrap"
import "./UserProfilePage.css"
import Loader from "../../components/Loader/Loader"
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard"
import UserClassesList from "../../components/UserClassesList/UserClassesList"

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

        <UserProfileCard {...user} key={user._id} />
        {
          loggedUser?.role === 'STUDENT'
            ?
            <UserClassesList user_id={user._id} />
            :
            <div>no estas apuntado a nada</div>
        }


      </Container>
      :
      <Loader />
  )

}

export default UserProfilePage
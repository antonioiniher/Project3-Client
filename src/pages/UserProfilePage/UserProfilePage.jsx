

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/User.services"
import { Col, Row, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./UserProfilePage.css"
import Loader from "../../components/Loader/Loader"
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard"

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

      </Container>
      :
      <Loader />
  )

}

export default UserProfilePage
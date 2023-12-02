import { Container, Col, Row, Button } from "react-bootstrap"
import iconAdress from "../../assets/icon-compass.svg"
import iconEmail from "../../assets/icon-at-sign.svg"
import iconPhone from "../../assets/icon-phone.svg"
import iconRole from "../../assets/icon-tool.svg"
import iconDiscord from "../../assets/discord.svg"
import iconUser from "../../assets/icon-user2.svg"
import './UserProfileCard.css'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"
import userService from "../../services/User.services"


const UserProfileCard = ({ _id, username, email, role, avatar, phoneNumber, idSkype, address }) => {

    const { loggedUser } = useContext(AuthContext)
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const deleteUser = () => {

        userService
            .deleteUserById(_id)
            .then(() => {
                logout()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="contentUser">
                <Col className="contentUserImg" >
                    <img src={avatar === "" ? userIcon : avatar} alt="imageProfile" className="imageProfile" />
                </Col>
                <Col className="colInfo">
                    <h1 className="nameProfile"> {username}</h1>
                    <hr />
                    <h4 className="mb-4 "><img src={iconEmail} alt="iconEmail" className="iconEmail" />   {email}</h4>
                    <h4 className="mb-4"><img src={iconRole} alt="iconRole" className="iconRole" />   {role}</h4>
                    <h5 className="mb-4"><img src={iconPhone} className="iconPhone" />   {phoneNumber}</h5>
                    <h5 className="mb-4"><img src={iconDiscord} className="iconDiscord" />   {idSkype} </h5>
                    <h5 className="mb-5"><img src={iconAdress} className="iconAdress" /> {address.street}, {address.city}, {address.country} </h5>
                    {
                        (loggedUser?.role === 'ADMIN' || loggedUser?._id === _id) &&
                        <>
                            < Link to={"/perfil/editar"} className="editButton">
                                Editar
                            </Link>
                            <Button type="submit" onClick={() => deleteUser()} className="btn-danger mb-4">
                                Eliminar
                            </Button>
                        </>
                    }
                </Col >
            </Row >

        </Container >
    )
}

export default UserProfileCard
import iconAdress from "../../assets/icon-compass.svg"
import iconEmail from "../../assets/icon-at-sign.svg"
import iconPhone from "../../assets/icon-phone.svg"
import iconRole from "../../assets/icon-tool.svg"
import iconDiscord from "../../assets/discord.svg"
import iconUser from "../../assets/icon-user2.svg"
import { Container, Col, Row } from "react-bootstrap"
import './UserProfileCard.css'
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"


const UserProfileCard = ({ _id, username, email, role, avatar, phoneNumber, idSkype, address }) => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <Container>
            <img src={iconUser} alt="iconUser" className="iconUser" />
            <Row className="contentUser">
                <Col className="contentUserImg" >
                    <img src={avatar === "" ? userIcon : avatar} alt="imageProfile" style={{ height: 350 }} />
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
                        loggedUser?._id === _id &&
                        < Link to={"/perfil/editar"} className="btn btn-dark mb-4">
                            Editar
                        </Link>
                    }
                </Col>
            </Row>

        </Container >
    )
}

export default UserProfileCard
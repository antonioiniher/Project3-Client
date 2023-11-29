import userIcon from "../../assets/user-icon2.png"
import iconAdress from "../../assets/iconAdress.svg"
import iconEmail from "../../assets/iconEmail.png"
import iconPhone from "../../assets/iconPhone.png"
import iconRole from "../../assets/iconRole.png"
import iconSkype from "../../assets/iconSkype.png"
import { Container, Col, Row } from "react-bootstrap"
import './UserProfileCard.css'
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"


const UserProfileCard = ({ _id, username, email, role, avatar, phoneNumber, idSkype, address }) => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <Container>
            <Row className="contentUser">
                <Col className="contentUserImg" >
                    <img src={avatar === "" ? userIcon : avatar} alt="imageProfile" style={{ height: 350 }} />
                </Col>
                <Col className="colInfo">
                    <h1> {username}</h1>
                    <hr />
                    <h4 className="mb-4"><img src={iconEmail} alt="iconEmail" />   {email}</h4>
                    <h4 className="mb-4"><img src={iconRole} alt="iconRole" />   {role}</h4>
                    <h5 className="mb-4"><img src={iconPhone} />   {phoneNumber}</h5>
                    <h5 className="mb-4"><img src={iconSkype} />   {idSkype} </h5>
                    <h5 className="mb-5"><img src={iconAdress} /> {address.street}, {address.city}, {address.country} </h5>
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
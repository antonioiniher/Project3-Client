import userIcon from "../../assets/user-icon2.png"
import iconAdress from "../../assets/iconAdress.svg"
import iconEmail from "../../assets/iconEmail.png"
import iconPhone from "../../assets/iconPhone.png"
import iconRole from "../../assets/iconRole.png"
import iconSkype from "../../assets/iconSkype.png"

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/User.services"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./UserProfilePage.css"

const UserProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)
    const [user, setUser] = useState(loggedUser)

    useEffect(() => {
        loadUser()
    }, [loggedUser])

    const loadUser = () => {
        if (loggedUser) {
            userService
                .profile(loggedUser._id)
                .then(({ data }) => {
                    setUser(data)
                })
                .catch(err => console.log(err))
        }
    }


    return (
        <div>
            <Row className="contentUser">
                <Col className="contentUserImg" >
                    <img src={user.avatar === "" ? userIcon : user.avatar} alt="imageProfile" style={{ height: 350 }} />

                </Col>
                <Col className="colInfo">
                    <h1> {user.username}</h1>
                    <hr />
                    <h4 className="mb-4"><img src={iconEmail} alt="iconEmail" />   {user.email}</h4>
                    <h4 className="mb-4"><img src={iconRole} alt="iconRole" />   {user.role}</h4>
                    <h5 className="mb-4"><img src={iconPhone} />   {user.phoneNumber}</h5>
                    <h5 className="mb-4"><img src={iconSkype} />   {user.idSkype} </h5>
                    <h5 className="mb-5"><img src={iconAdress} /> {user.address} </h5>
                    <Link to={"/perfil/editar"} user={user} className="btn btn-dark mb-4">
                        Editar
                    </Link>
                </Col>
            </Row>

        </div>

    )

}

export default UserProfilePage
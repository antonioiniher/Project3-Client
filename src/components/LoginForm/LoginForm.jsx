import { useContext, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import authService from "../../services/Auth.services"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"

import icon from '../../assets/icon-send.svg'


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const redirectHome = () => {
        navigate("/")
    }

    const { authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
                redirectHome()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="loginForm">
            <Form onSubmit={handleSubmit}>
                <div className="emailRow">
                    <Form.Group className="mb-3 emailText" controlId="email">
                        <Form.Label >Email</Form.Label>
                        <Form.Control className="loginControl" type="email" value={loginData.email} onChange={handleInputChange} name="email" />
                    </Form.Group>
                </div>
                <div className="passwordRow">
                    <Form.Group className="mb-3 passwordText" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control className="loginControl" type="password" value={loginData.password} onChange={handleInputChange} name="password" />
                    </Form.Group>
                </div>
                <div className="buttonLogin">
                    <Button className="formButton btn mt-3" type="submit"> Entrar <img src={icon} alt="loginButton" /></Button>
                </div>

            </Form>
        </div >
    )
}

export default LoginForm
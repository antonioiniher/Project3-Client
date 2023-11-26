import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const LoginForm = () => {

    // const [loginData, setLoginData] = useState({
    //     email: '',
    //     password: ''
    // })

    // const navigate = useNavigate()

    // const { authenticateUser } = useContext(AuthContext)

    // const handleInputChange = e => {
    //     const { value, name } = e.target
    //     setLoginData({ ...loginData, [name]: value })
    // }

    // const handleSubmit = e => {

    //     e.preventDefault()

    //     authService
    //         .login(loginData)
    //         .then(({ data }) => {
    //             localStorage.setItem('authToken', data.authToken)
    //             authenticateUser()
    //         })
    //         .catch(err => console.log(err))
    // }

    return (

        <Form>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Entrar</Button>
            </div>

        </Form>
    )
}

export default LoginForm
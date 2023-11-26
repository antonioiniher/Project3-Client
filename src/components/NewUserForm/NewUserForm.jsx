import { useState } from "react"
import { Form, Button, Row, Col, FormSelect } from "react-bootstrap"
import './NewUserForm.css'
import { useNavigate } from "react-router-dom"

import authService from "../../services/Auth.services"


const NewUserForm = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        avatar: '',
        address: '',
        role: '',
        phoneNumber: '',
        idSkype: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const navigate = useNavigate()

    const handleUserSubmit = e => {

        e.preventDefault()

        authService
            .signup(user)
            .then(() => navigate('/inicio-sesion'))
            .catch(err => console.log(err))

        console.log(user)
    }

    return (

        <div className="NewUserForm">

            <Row >

                <Col lg={{ span: 8, offset: 2 }}>
                    <Form onSubmit={handleUserSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={user.username} name="username" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={user.email} name="email" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={user.password} name="password" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" value={user.address} name="address" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="avatar">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control type="text" value={user.avatar} name="avatar" onChange={handleInputChange} />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="role">
                                    <Form.Label>Rol</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={handleInputChange} name="role">
                                        <option>Selección</option>
                                        <option value="STUDENT">Estudiante</option>
                                        <option value="TEACHER">Profesor</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="phoneNumber">
                                    <Form.Label>Teléfono de contacto</Form.Label>
                                    <Form.Control type="number" value={user.phoneNumber} name="phoneNumber" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="idSkype">
                                    <Form.Label>Cuenta de Skype</Form.Label>
                                    <Form.Control type="text" value={user.idSkype} name="idSkype" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Crear usuario</Button>
                        </div>
                    </Form>

                </Col>


            </Row>



        </div>
    )
}

export default NewUserForm
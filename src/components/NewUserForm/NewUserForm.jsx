import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import './NewUserForm.css'
import { useNavigate } from "react-router-dom"
import authService from "../../services/Auth.services"
import uploadServices from "../../services/Upload.services"


const NewUserForm = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    avatar: '',
    street: '',
    city: '',
    country: '',
    role: '',
    phoneNumber: '',
    idSkype: '',
    description: ''
  })

  const [isLoading, setIsLoading] = useState(false)

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
  }

  const handleFileUpload = e => {

    setIsLoading(true)

    const formData = new FormData()
    formData.append('imageData', e.target.files[0])

    uploadServices
      .uploadimage(formData)
      .then(res => {
        setUser({ ...user, avatar: res.data.cloudinary_url })
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }

  return (

    <div className="NewUserForm">

      <Row >

        <Col lg={{ span: 8, offset: 2 }}>
          <Form onSubmit={handleUserSubmit}>
            <Form.Group className="mb-3 nameText" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control className="signupControl" type="text" value={user.username} name="username" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 emailText" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control className="signupControl" type="email" value={user.email} name="email" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 passwordText" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control className="signupControl" type="password" value={user.password} name="password" onChange={handleInputChange} />
            </Form.Group>

            <Row>

              <Col>
                <Form.Group className="mb-3 streetText" controlId="street">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control className="signupControl" type="text" value={user.street} name="street" onChange={handleInputChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 cityText" controlId="city">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control className="signupControl" type="text" value={user.city} name="city" onChange={handleInputChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 countryText" controlId="country">
                  <Form.Label>Pais</Form.Label>
                  <Form.Control className="signupControl" type="text" value={user.country} name="country" onChange={handleInputChange} />
                </Form.Group>
              </Col>

            </Row>
            <Row>
              <p className="text-center avatarP">Avatar</p>
            </Row>
            <Form.Group className="mb-3 avatarText" controlId="avatar">
              <Form.Control className="buttonAvatar d-none" type="file" id="fileInput" onChange={handleFileUpload} />
              <label htmlFor="fileInput" className="buttonAvatar"> Subir archivo</label>
            </Form.Group>


            <Row>
              <Col>
                <Form.Group className="mb-3 rolText" controlId="role">
                  <Form.Label>Rol</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={handleInputChange} name="role" className="selectRol">
                    <option className="selectionText">Selección</option>
                    <option value="STUDENT" className="optionsRol">Estudiante</option>
                    <option value="TEACHER" className="optionsRol">Profesor</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3 phoneText" controlId="phoneNumber">
                  <Form.Label>Teléfono de contacto</Form.Label>
                  <Form.Control className="signupControl" type="number" value={user.phoneNumber} name="phoneNumber" onChange={handleInputChange} />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3 skypeText" controlId="idSkype">
                  <Form.Label>Cuenta de Skype</Form.Label>
                  <Form.Control className="signupControl" type="text" value={user.idSkype} name="idSkype" onChange={handleInputChange} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3 descriptionText" controlId="description">
              <Form.Label>Cuéntanos algo sobre ti</Form.Label>
              <Form.Control className="signupControl" type="textarea" value={user.description} name="description" onChange={handleInputChange} />
            </Form.Group>

            <div className="d-grid buttonSignUp">
              <Button className="buttonInside" type="submit" disabled={isLoading}>{isLoading ? 'Cargando imagen...' : 'Crear usuario'}</Button>
            </div>
          </Form>

        </Col>


      </Row>



    </div>
  )
}

export default NewUserForm
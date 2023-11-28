import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Form, useNavigate } from "react-router-dom"

const NewClassForm = () => {

    const [classes, setClasses] = useState({
        title: '',
        description: '',
        languages: '',
        classType: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setClasses({ ...classes, [name]: value })
    }

    const navigate = useNavigate()

    const handleClassSubmit = e => {

        e.preventDefault()

        classService
            .create(classes)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (

        <div className="NewUserForm">
            <Row >
                <Col lg={{ span: 8, offset: 2 }}>
                    <Form onSubmit={handleClassSubmit}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" value={classes.title} name="title" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control type="text" value={classes.description} name="email" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="languages">
                            <Form.Label>Lenguajes:</Form.Label>
                            <Form.Select value={classes.languages} onChange={handleInputChange} name="languages">
                                <option value="Javascript">Selección</option>
                                <option value="Java">Estudiante</option>
                                <option value="Ruby">Profesor</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="classType">
                            <Form.Label>Tipo de clase:</Form.Label>
                            <Form.Select value={classes.classType} onChange={handleInputChange} name="classType">
                                <option value="On-site">Presencial</option>
                                <option value="Hybrid">Híbrida</option>
                                <option value="Remote">En remoto</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )

}

export default NewClassForm
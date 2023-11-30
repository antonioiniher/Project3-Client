import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import * as CLASS_CONSTS from './../../consts/class-consts'

import classService from "../../services/Class.services"

const NewClassForm = () => {

    const [classes, setClasses] = useState({
        title: '',
        description: '',
        languages: [],
        classType: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.currentTarget

        setClasses((prevClasses) => ({
            ...prevClasses,
            [name]: name === 'languages' ? Array.from(e.target.selectedOptions).map((option) => option.value) : value,
        }))
    }

    const handleClassSubmit = e => {

        e.preventDefault()

        classService
            .create(classes)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    return (

        <div className="NewClassForm">

            <Form onSubmit={handleClassSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" value={classes.title} name="title" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control type="text" value={classes.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="languages">
                    <Form.Label>Lenguajes:</Form.Label>
                    <Form.Select multiple onChange={handleInputChange} name="languages">
                        {
                            CLASS_CONSTS.LANGUAGES.map(elm => <option value={elm} key={elm}>{elm}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="classType">
                    <Form.Label>Tipo de clase:</Form.Label>
                    <Form.Select onChange={handleInputChange} name="classType">
                        <option>Selecciona una opción</option>
                        <option value="On-site">Presencial</option>
                        <option value="Hybrid">Híbrida</option>
                        <option value="Remote">En remoto</option>
                    </Form.Select>
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear clase</Button>
                </div>
            </Form>

        </div>
    )

}

export default NewClassForm
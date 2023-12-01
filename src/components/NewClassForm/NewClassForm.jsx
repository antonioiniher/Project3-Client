import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import FormError from "../FormError/FormError"
import * as CLASS_CONSTS from './../../consts/class-consts'

import classService from "../../services/Class.services"

const NewClassForm = () => {

    const [classes, setClasses] = useState({
        title: '',
        description: '',
        languages: [],
        classType: ''
    })
    const [errors, setErrors] = useState([])

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
            .catch(err => setErrors(err.response.data.errorMessages))

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
                        {/* <option value="Java">Java</option>
                        <option value="Ruby">Ruby</option>
                        <option value="PHP">PHP</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                        <option value="Python">Python</option>
                        <option value="SQL">SQL</option>
                        <option value="React">React JS</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Ruby">Ruby</option> */}
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
                    {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)} </FormError>}
                    <Button variant="dark" type="submit">Crear clase</Button>
                </div>
            </Form>

        </div>
    )

}

export default NewClassForm
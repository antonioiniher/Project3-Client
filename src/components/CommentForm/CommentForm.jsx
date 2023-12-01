import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import commentService from "../../services/Comment.services"
import { useNavigate, useParams } from "react-router-dom"
import FormError from "../FormError/FormError"

const CommentForm = () => {

    const { teacher } = useParams()

    const [comment, setComment] = useState({
        teacher: teacher,
        text: ""
    })

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()

        commentService
            .create(comment)
            .then(() =>
                navigate(`/perfil/${owner._id}`),
                setComment({ text: "" }),
            )
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setComment({ ...comment, [name]: value })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="text">
                    <Form.Label>Deja tu Comentario</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={comment.text}
                        onChange={handleInputChange}
                        placeholder="Escribe un comentario..."
                        name="text"
                    />
                </Form.Group>
                {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)} </FormError>}
                <Button variant="primary" type="submit">
                    Comentar
                </Button>
            </Form>

        </div>
    )
}

export default CommentForm
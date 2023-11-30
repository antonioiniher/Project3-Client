import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import commentService from "../../services/Comment.services"
import { useNavigate, useParams } from "react-router-dom"

const CommentForm = () => {

    const { teacher } = useParams()

    const [comment, setComment] = useState({
        teacher: teacher,
        text: ""
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()

        commentService
            .create(comment)
            .then(() =>
                navigate(`/perfil/${owner._id}`),
                setComment({ text: "" }),
            )
            .catch(err => console.log(err))

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
                <Button variant="primary" type="submit">
                    Comentar
                </Button>
            </Form>

        </div>
    )
}

export default CommentForm
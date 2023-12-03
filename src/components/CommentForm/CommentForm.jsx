import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import commentService from "../../services/Comment.services"
import { useParams } from "react-router-dom"
import FormError from "../FormError/FormError"
import "./CommentForm.css"


const CommentForm = ({ loadComments }) => {

    const { owner_id } = useParams()
    const [comment, setComment] = useState({
        teacher: owner_id,
        text: ""
    })

    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault()

        commentService
            .create(comment)
            .then(() => {
                loadComments()
                setComment({ text: "" })
                setErrors([])
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setComment({ teacher: owner_id, [name]: value })
    }

    return (
        <div>

            <Form onSubmit={handleSubmit} autocomplete="off" className="formComments">
                <Form.Group controlId="text">
                    <Form.Label> Comenta </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={comment.text}
                        onChange={handleInputChange}
                        placeholder="Escribe un comentario..."
                        name="text"
                    />
                </Form.Group>
                {errors?.length > 0 && <FormError>{errors.map(elm => <p key={elm}>{elm}</p>)} </FormError>}
                <Button type="submit">
                    Comentar
                </Button>
            </Form>

        </div>
    )
}

export default CommentForm
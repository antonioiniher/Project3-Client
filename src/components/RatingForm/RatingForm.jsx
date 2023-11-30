import './RatingForm.css'
import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import userService from '../../services/User.services'


const RatingForm = () => {

    const [showModal, setShowModal] = useState(false)
    const [rating, setRating] = useState(0)
    const { owner_id } = useParams()

    const finalActions = () => {
        setShowModal(false)
    }

    const handleInputChange = e => {
        const { value } = e.target
        setRating(value)
    }

    const handleSubmit = e => {

        e.preventDefault()

        userService
            .editUserWithRating(owner_id, rating)
            .then(() => setShowModal(false))
            .catch(err => console.log(err))

    }

    return (
        <div className="RatingForm">
            <Button className="ratingButton" onClick={() => setShowModal(true)}>Votar</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Votar al profesor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="rating">
                            <Form.Control type="number" onChange={handleInputChange} name="rating" placeholder='Vota con un número del 1 al 10' />
                        </Form.Group>
                        <Button type='submit' className='ratingButton' onClick={finalActions}>Enviar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )

}

export default RatingForm
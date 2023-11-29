import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const ClassCard = ({ _id, languages, description, classType, title, owner }) => {

    return (
        <Card className="text-center">
            <Card.Header>Lenguajes: {languages.map(e => { return e })} | Se imparte de forma: {classType}
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/clase/${_id}`} className="btn btn-dark mb-4">
                    Más detalles
                </Link>
            </Card.Body>
            <Card.Footer className="text-muted">Profe: <Link to={`/perfil/${owner._id}`} className="btn btn-dark mb-4"> {owner.username} </Link> </Card.Footer>
        </Card >
    )
}


export default ClassCard
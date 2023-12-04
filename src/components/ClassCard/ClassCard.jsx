import { Link } from "react-router-dom"
import "./ClassCard.css"
import { Row, Col, Button } from 'react-bootstrap'
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"




const ClassCard = ({ _id, languages, city, description, classType, title, owner }) => {

    const { loggedUser } = useContext(AuthContext)


    return (

        <Col md={4}>
            <div className="card text-center">
                <div className="cardHeader">
                    {languages.map(e => <span key={e} style={{ color: "#12F7D6" }}>{e} </span>)}
                    <span>{classType === 'Hybrid' ? <p>Híbrida</p> : classType === 'On-site' ? <p>Presencial</p> : <p>Remota</p>}</span>
                </div>
                <div className="cardBody">
                    <h5 className="custom-card-title">{title}</h5>
                    <div className="custom-card-text">
                        <p style={{ color: "#0bbaa0" }}> Descripción: </p>
                        <p className="descriptionCard"> {description} </p>
                        {city && <p>Ciudad: {city}</p>}
                    </div>
                    <Link to={`/clase/${_id}`} className="moreDetailsLink">
                        Más detalles de la clase
                    </Link>
                </div>
                <div className="cardFooter text-muted">
                    <span> Profesor: </span><Link to={`/perfil/${owner._id}`} className="ownerClassLink">
                        {owner.username}
                    </Link>
                </div>

                <div>
                    {
                        (loggedUser?.role === 'ADMIN' || owner._id === loggedUser?._id)
                        &&
                        <Row>
                            <Col>
                                < Link to={`/clase/${_id}/editar`} className="editButton">
                                    Editar
                                </Link>
                            </Col>
                            <Col>
                                <Button type="submit" onClick={() => deleteUser()} className="deleteButton">
                                    Eliminar
                                </Button>
                            </Col>

                        </Row>
                    }

                </div>
            </div>
        </Col>


    )
}

export default ClassCard
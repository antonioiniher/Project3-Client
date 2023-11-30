import "./DetailsClassPage.css"
import { Container, Col, Row, Button } from "react-bootstrap"
import classService from "../../services/Class.services"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Loader from "../../components/Loader/Loader"
import { AuthContext } from "../../contexts/auth.context"

const DetailsClassPage = () => {

    const { class_id } = useParams()
    const { loggedUser } = useContext(AuthContext)
    const [classes, setClasses] = useState({})

    useEffect(() => {
        loadClassDetails()
    }, [])

    const navigate = useNavigate()


    const loadClassDetails = () => {
        classService
            .getOneClass(class_id)
            .then(({ data }) => {
                setClasses(data)
            })
            .catch(err => console.log(err))
    }

    const handleClassRequest = e => {
        classService
            .putClassRequest(loggedUser._id, class_id)
            .then(() => navigate('/'))
            .catch(error => console.log(error))
    }

    return (
        classes ?
            <div className="allPage">
                <Container>
                    <Row className="titleDetails">
                        <h1>{classes.title}</h1>
                        <hr />
                        <h3>{classes.owner?.username}</h3>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <h2 className="descriptionTitle">Descripción </h2>

                            <p>{classes.description}</p>
                        </Col>
                        <Col md={{ span: 3, offset: 2 }} className="languagesCol">
                            <p className="languagesName">Languages</p>
                            {classes.languages?.map((e, i) =>
                                <p key={i}>{e}</p>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        {
                            loggedUser?.role === 'STUDENT'
                                ?
                                <Button onClick={handleClassRequest}>Solicitar clase</Button>
                                :
                                <div>logeate</div>
                        }
                    </Row>
                </Container>
            </div>
            :
            <Loader />
    )
}

export default DetailsClassPage
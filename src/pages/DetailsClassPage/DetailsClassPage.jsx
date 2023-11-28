import { Container, Col, Row, Button } from "react-bootstrap"
import "./DetailsClassPage.css"
import classService from "../../services/Class.services"
import userService from "../../services/User.services"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../../components/Loader/Loader"

const DetailsClassPage = () => {

    const { class_id } = useParams()

    const [classes, setClasses] = useState({})

    useEffect(() => {
        loadClassDetails()
    }, [])



    const loadClassDetails = () => {
        classService
            .getOneClass(class_id)
            .then(({ data }) => {
                console.log("esto es data", data)
                setClasses(data)
            })
            .catch(err => console.log(err))
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
                    </Row>
                </Container>
            </div>
            :
            <Loader />
    )
}

export default DetailsClassPage
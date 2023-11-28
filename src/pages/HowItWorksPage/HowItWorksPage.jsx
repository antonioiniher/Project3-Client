import "./HowItWorksPage.css"

import { Row, Col, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const HowItWorksPage = () => {


    return (
        <div className="allPageHowItWorks">
            <Container className="HowItWorksContainer">
                <Row className="row1">
                    <Col md={{ span: 6 }}>
                        <p>
                            CodeConnect
                        </p>
                    </Col>
                </Row>
                <Row className="row2">
                    <Col md={{ span: 6, offset: 6 }}>
                        <p>
                            Ofrecemos mentores expertos en lenguajes como JavaScript, Python, C++, y Java, adecuados para todos los niveles.
                            Características Únicas: Busca y encuentra el profesor perfecto con filtros personalizados. Interactúa, participa en sesiones y comparte en nuestra comunidad.
                        </p>
                    </Col>
                </Row>
                <Row className="row3">
                    <Col md={{ span: 6 }}>
                        <p>
                            Amplia variedad de cursos para todos los niveles. Accede a una comunidad activa y recibe soporte en tu viaje de aprendizaje. En CodeConnect, impulsamos tus metas en tecnología.
                        </p>
                    </Col>
                </Row>
                <Row className="row4">
                    <p className="finalText">
                        Inicia tu camino en programación con CodeConnect.
                    </p>
                </Row>

            </Container>

        </div >
    )
}


export default HowItWorksPage
import iconFacebook from "../../assets/iconFacebook.png"
import iconLinkedin from "../../assets/iconLinkedin.png"
import iconTwitter from "../../assets/iconTwitter.png"
import iconInstagram from "../../assets/iconInstagram.png"


import "./ContactPage.css"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const ContactPage = () => {


    return (
        <div>
            <Container className="contactContainer">
                <Row>
                    <Col md={{ span: 6 }}>
                        <h1 className="titleContactPage">Contáctanos</h1>
                        <p className="subtitleContactPage"> y conecta con expertos en programación</p>
                    </Col>
                </Row>
                <Row className="iconsSocials">
                    <Col>
                        <Link to={"https://www.facebook.com/?locale=es_ES"}>
                            <img src={iconFacebook} alt="iconFacebook" className="imgFacebook" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"https://www.linkedin.com/"}>
                            <img src={iconLinkedin} alt="iconLinkedin" style={{ height: "50px" }} />
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"https://twitter.com/?lang=es"}>
                            <img src={iconTwitter} alt="iconTwitter" style={{ height: "50px" }} />
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"https://www.instagram.com/"}>
                            <img src={iconInstagram} alt="iconInstagram" style={{ height: "50px" }} />
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


export default ContactPage
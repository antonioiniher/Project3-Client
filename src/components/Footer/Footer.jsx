import './Footer.css'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
const Footer = () => {

    return (
        <footer>
            <Container>
                <div className="border-top pb-3 mb-3">
                    <Row>
                        <Col md={{ offset: 2 }}>
                            <span><Link to={'/'} className="linksFooter">Home </Link></span>
                        </Col>
                        <Col md={{ offset: 2 }}>
                            <span><Link to={'/nosotros'} className="linksFooter">Nosotros </Link></span>
                        </Col>
                        <Col md={{ offset: 2 }}>
                            <span><Link to={'/como-funciona'} className="linksFooter">Como funciona </Link></span>
                        </Col>
                        <Col md={{ offset: 2 }}>
                            <span><Link to={'/contacto'} className="linksFooter">Contacto </Link></span>
                        </Col>
                    </Row>

                </div>
                <p className="text-center linksFooter">© 2023 Proyecto 3</p>
            </Container>
        </footer>
    )
}

export default Footer
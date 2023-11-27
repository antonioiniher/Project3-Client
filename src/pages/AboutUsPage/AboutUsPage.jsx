import { Card, Button, Row, Col } from 'react-bootstrap'
import Fail1 from './../../assets/fail1.png'

const AboutUs = () => {
    return (

        <Row className='mt-4'>
            <Col md={{ span: 4, offset: 3 }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Fail1} />
                    <Card.Body>
                        <Card.Title>Primer Merge</Card.Title>
                        <Card.Text>
                            Resultado del primer merge del NavBar, HomePage y Footer
                        </Card.Text>
                        <div className="d-grid">
                            <Button variant="primary">Amplia la foto</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default AboutUs
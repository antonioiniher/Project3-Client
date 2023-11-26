import login1 from "../../assets/login1.png"
import login2 from "../../assets/login2.png"
import login3 from "../../assets/login3.png"


import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import "./LoginPage.css"

const LoginPage = () => {

    return (

        <Container className='loginContainer'>

            <Row>
                <Col>
                    <h1 className='loginTitle'>Login</h1>

                    <Col md={{ offset: 4, span: 4 }}>
                        <hr />
                        <LoginForm />
                    </Col>
                </Col>

            </Row>

        </Container>
    )
}

export default LoginPage
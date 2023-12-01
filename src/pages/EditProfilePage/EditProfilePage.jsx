import EditUserForm from "../../components/EditUserForm/EditUserForm"
import { Container, Row, Col } from "react-bootstrap"

const EditUserProfilePage = () => {

    return (
        <Container>
            <h1 className='text-center mb-4'>Edita tu perfil</h1>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                    <EditUserForm />
                </Col>
            </Row>
        </Container>
    )
}

export default EditUserProfilePage
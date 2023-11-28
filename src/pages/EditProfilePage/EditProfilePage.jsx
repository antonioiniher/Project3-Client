import EditUserForm from "../../components/EditUserForm/EditUserForm"
import { Container, Row } from "react-bootstrap"

const EditUserProfilePage = () => {

    return (
        <Container>
            <h1 className='text-center mb-4'>Edita tu perfil</h1>
            <EditUserForm />
        </Container>
    )
}

export default EditUserProfilePage
import EditUserProfile from "../../components/EditUserProfile/EditUserProfile"
import { Container, Row } from "react-bootstrap"

const EditUserProfilePage = () => {

    return (
        <Container>
            <h1 className='text-center mb-4'>Edita tu perfil</h1>
            <EditUserProfile />
        </Container>
    )
}

export default EditUserProfilePage
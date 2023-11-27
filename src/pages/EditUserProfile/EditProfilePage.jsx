import EditUserProfile from "../../components/EditUserProfile/EditUserProfile"


const EditUserProfilePage = ({ user }) => {
    return (
        <Container>
            <h1 className='text-center mb-4'>Edita tu perfil</h1>
            <EditUserProfile user={user} />
        </Container>
    )
}

export default EditUserProfilePage
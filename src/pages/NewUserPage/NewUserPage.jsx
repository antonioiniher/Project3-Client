import NewUserForm from '../../components/NewUserForm/NewUserForm'
import { Container } from 'react-bootstrap'


const NewUser = () => {

    return (

        <Container>
            <h1 className='text-center mb-4 titleSignUp'>Nuevo usuario</h1>
            <NewUserForm />
        </Container>

    )

}

export default NewUser
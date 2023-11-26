import NewUserForm from './../../components/NewUserForm/NewUserForm'
import { Container } from 'react-bootstrap'


const NewUser = () => {

    return (
        <div className="">
            <Container>
                <h1 className='text-center mb-4'>Nuevo usuario</h1>
                <NewUserForm />
            </Container>
        </div>
    )

}

export default NewUser
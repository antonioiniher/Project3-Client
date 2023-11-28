import { Container } from "react-bootstrap"
import NewClassForm from '../../components/NewClassForm/NewClassForm'

const NewClassPage = () => {

    return (

        <Container>
            <h1 className='text-center mb-4'>Nueva clase</h1>
            <NewClassForm />
        </Container>

    )

}

export default NewClassPage
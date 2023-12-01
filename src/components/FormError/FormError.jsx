import Alert from 'react-bootstrap/Alert'
import "./FormError.css"


const FormError = ({ children }) => {
    return (
        <Alert variant={'danger'} style={{ textAlign: 'center', fontSize: '2em' }} className='alert'>
            {children}
        </Alert>
    )
}

export default FormError
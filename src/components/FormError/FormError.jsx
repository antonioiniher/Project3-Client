import Alert from 'react-bootstrap/Alert'
import "./FormError.css"


const FormError = ({ children }) => {
    return (
        <div className='alert'>
            {children}
        </div>
    )
}

export default FormError
import Alert from 'react-bootstrap/Alert'

const FormError = ({ children }) => {
    return (
        <Alert variant={'danger'} style={{ textAlign: 'center', fontSize: '6em' }}>
            {children}
        </Alert>
    )
}

export default FormError
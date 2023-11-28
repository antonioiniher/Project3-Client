import Loader from "../Loader/Loader"
import { Row } from 'react-bootstrap'

const ClassesList = ({ classes }) => {

    return (
        classes
            ?
            <Row>
                {
                    classes.map(e => <ClassCard {...e} key={e._id} />)
                }
            </Row>
            :
            <Loader />
    )
}

export default ClassesList
import Loader from "../Loader/Loader"
import { Col, Row } from 'react-bootstrap'
import ClassCard from "../ClassCard/ClassCard"

const ClassesList = ({ classes }) => {

    return (
        classes
            ?
            <Row>
                <Col md={3}>
                    {
                        classes.map(e => <ClassCard {...e} key={e._id} />)
                    }
                </Col>
            </Row>
            :
            <Loader />
    )
}

export default ClassesList
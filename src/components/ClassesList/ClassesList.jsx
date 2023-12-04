import Loader from "../Loader/Loader"
import { Col, Row } from 'react-bootstrap'
import ClassCard from "../ClassCard/ClassCard"
import "./ClassesList.css"


const ClassesList = ({ classes, loadClasses }) => {

    return (
        classes
            ?
            <Row className="row">
                {
                    classes.map(e => <ClassCard {...e} key={e._id} loadClasses={loadClasses} />)
                }
            </Row>
            :
            <Loader />
    )
}

export default ClassesList
import './CommentCard.css'
import { Card, Col } from "react-bootstrap"

const CommentCard = ({ commentList }) => {

    return (
        <>
            {
                commentList?.map(e => {
                    return (
                        <Col className='mb-3' md={6} key={e._id}>
                            <Card className="text-center CommentCard">
                                <Card.Body>
                                    <Card.Title className='CommentTitle'>{e.user.username}</Card.Title>
                                    <Card.Text className='CommentText'>
                                        {e.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card >
                        </Col>
                    )
                })

            }
        </>
    )

}

export default CommentCard
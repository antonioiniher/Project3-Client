
import { Form, Row } from "react-bootstrap"


const SearchBar = () => {


    return (
        <Form>
            <Row>
                <Form.Group className="mb-3 searchBar" controlId="searcher" style={{ marginLeft: "50px", padding: "30px" }}>
                    <Form.Control type="text" placeholder="Busca una clase" />
                </Form.Group>
            </Row>
        </Form >
    )

}


export default SearchBar
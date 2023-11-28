import teacher from "../../assets/teacher.jpg"
import cplusplus from "../../assets/c++.png"
import csharp from "../../assets/csharp.png"
import java from "../../assets/java.png"
import javascript from "../../assets/javascript.png"
import python from "../../assets/python.png"
import ruby from "../../assets/ruby.png"
import sql from "../../assets/sql.png"

import SearchBar from "../../components/SearchBar/SearchBar"
import { Row, Col, Container } from "react-bootstrap"
import "./HomePage.css"

const HomePage = () => {


    return (
        <div className="allHomePage">
            <Container>
                <Row className="rowHomePage">
                    <Col md={{ span: 6 }}>
                        <h1 className="teacherTextHomePage">Encuentra a los mejores profesores en programación</h1>
                    </Col>
                    <Col md={{ span: 6 }} className="imgTeacherHomePage">
                        <img src={teacher} alt="teacherHomePage" style={{ height: 250 }} className="imgTeacherHomePage" />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 4 }} className="searchBarHomePage">
                        <SearchBar />
                    </Col>
                </Row>
                <Row>
                    <h4 className="demandHomePage">En los lenguajes más demandados</h4>
                </Row>
                <Row className="languagesHomePage">
                    <Col>
                        <img src={cplusplus} alt="cplusplus" style={{ height: 50 }} />
                    </Col>
                    <Col>
                        <img src={csharp} alt="cplusplus" style={{ height: 50 }} />

                    </Col>
                    <Col>
                        <img src={java} alt="cplusplus" style={{ height: 50 }} />
                    </Col>
                    <Col>
                        <img src={javascript} alt="cplusplus" style={{ height: 50 }} />

                    </Col>
                    <Col>
                        <img src={python} alt="cplusplus" style={{ height: 50 }} />

                    </Col>
                    <Col>
                        <img src={ruby} alt="cplusplus" style={{ height: 50 }} />

                    </Col>
                    <Col>
                        <img src={sql} alt="cplusplus" style={{ height: 50 }} />

                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 1 }}>
                        <h2 className="newFormOfLearning">Una nueva forma de aprender en el mundo digital</h2>
                    </Col>
                </Row>
                <Row className="">
                    <h4>1. Encuentra clases según el lenguaje</h4>
                    <p></p>
                </Row>
            </Container>

        </div >
    )
}


export default HomePage
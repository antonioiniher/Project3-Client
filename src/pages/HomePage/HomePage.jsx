import "./HomePage.css"
import { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import SearchBar from "../../components/SearchBar/SearchBar"
import SearchResultsClassesList from "../../components/SearchResultsClassesList/SearchResultsClassesList"
import teacher from "../../assets/teacher.jpg"
import cplusplus from "../../assets/c++.png"
import csharp from "../../assets/csharp.png"
import java from "../../assets/java.png"
import javascript from "../../assets/javascript.png"
import python from "../../assets/python.png"
import ruby from "../../assets/ruby.png"
import sql from "../../assets/sql.png"

const HomePage = () => {

    const [results, setResults] = useState([])
    console.log("RESULTADOS DESDE HOME", results)


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
                        <SearchBar setResults={setResults} />
                        <SearchResultsClassesList to={'/clases'} results={results} />
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
                <Row className="rowSearch">
                    <Col md={{ span: 4, offset: 8 }}>
                        <h4>1. Busca</h4>
                        <p>Encuentra cursos y tutores en programación ajustados a tus necesidades y nivel de habilidad.</p>
                    </Col>
                </Row>
                <Row className="rowChoose">
                    <Col md={{ span: 4, offset: 2 }}>
                        <h4>2. Elige</h4>
                        <p>
                            Selecciona tu instructor ideal basado en calificaciones y especialización.
                        </p>
                    </Col>
                </Row>
                <Row className="rowLearn">
                    <Col md={{ span: 4, offset: 8 }}>
                        <h4>3. Aprende</h4>
                        <p>
                            Asiste a clases interactivas y mejora tus habilidades de programación con proyectos prácticos.
                        </p>
                    </Col>
                </Row>
                <Row className="rowRate">
                    <Col md={{ span: 4, offset: 2 }}>
                        <h4>4. Valora</h4>
                        <p>
                            Evalúa tus sesiones para mejorar la experiencia y orientar a futuros estudiantes.
                        </p>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}


export default HomePage
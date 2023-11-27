import "./HowItWorksPage.css"

import { Row, Col, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const HowItWorksPage = () => {


    return (
        <div className="allPageHowItWorks">
            <Container className="HowItWorksContainer">
                <Row>
                    <Col>
                        <h1 className="titleHowItWorksPage">Bienvenidos a CodeConnect: Tu Puente al Mundo de la Programación </h1>
                    </Col>
                </Row>
                <Row className="row1">
                    <Col md={{ span: 6 }}>
                        <p>
                            Descubre. Aprende. Crece. En CodeConnect, abrimos un universo de posibilidades para entusiastas de la programación, estudiantes en busca de conocimiento y profesionales que desean expandir sus habilidades. Somos más que una página web; somos una comunidad vibrante donde la pasión por la programación nos une.
                            ¿Eres Estudiante? Encuentra tu mentor ideal aquí. Desde JavaScript hasta Python, C++, Java y más, nuestros profesores experimentados están listos para guiarte a través del emocionante mundo de la programación. Ya sea que estés dando tus primeros pasos o buscando dominar habilidades avanzadas, aquí hay un lugar para ti.
                        </p>
                    </Col>
                </Row>
                <Row className="row2">
                    <Col md={{ span: 6, offset: 6 }}>
                        <p>
                            Características Únicas:
                            Encuentra el Profesor Perfecto: Filtros personalizados para encontrar profesores por lenguaje de programación, nivel y disponibilidad.
                            Interactúa y Evalúa: Comunícate con tus profesores, participa en sesiones interactivas y comparte tus opiniones con nuestra comunidad.
                        </p>
                    </Col>
                </Row>
                <Row className="row3">
                    <Col md={{ span: 6 }}>
                        <p>
                            Variedad de Cursos: Desde cursos introductorios hasta talleres avanzados, hay algo para cada nivel de habilidad.
                            Comunidad y Soporte: Accede a una comunidad activa y obtén soporte continuo en tu viaje de aprendizaje.
                            En CodeConnect, creemos en el poder transformador de la educación en programación. No importa tu nivel de experiencia o tus metas, aquí encontrarás los recursos y el apoyo para alcanzar tus sueños en el mundo de la tecnología. Explora, aprende y conecta con nosotros hoy.
                        </p>
                    </Col>

                </Row>
                <Row className="row4">
                    <p className="finalText">
                        ¡Tu futuro en la programación comienza aquí en CodeConnect!
                    </p>
                </Row>
            </Container>

        </div >
    )
}


export default HowItWorksPage
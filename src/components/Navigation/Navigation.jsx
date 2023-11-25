import './Navigation.css'
import { Container, NavDropdown, Navbar } from "react-bootstrap"
import user from './../../assets/user-icon2.png'

const Navigation = () => {

    return (
        <Navbar fixed="top" className='mb-5 Navbar' expand="lg">
            <Container>
                <Navbar.Brand href="/">Clases particulares</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown drop='down-centered' className='custom-nav' title={<img src={user} alt="" />} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/registro">Registrarse</NavDropdown.Item>
                        <NavDropdown.Item href="/inicio-sesion">
                            Iniciar sesión
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/perfil">Mi perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            Cerrar sesión
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation
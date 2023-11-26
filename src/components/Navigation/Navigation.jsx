import './Navigation.css'
import { Container, NavDropdown, Navbar } from "react-bootstrap"
import user from './../../assets/user-icon2.png'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const { loggedUser, logout } = useContext(AuthContext)

    return (
        <Navbar sticky='top' className='Navbar' expand="lg">
            <Container>
                <Navbar.Brand><Link to={'/'}>Clases particulares</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown drop='down-centered' className='custom-nav' title={<img src={user} alt="" />} id="basic-nav-dropdown">
                        {
                            !loggedUser
                                ?
                                <>
                                    <NavDropdown.Item><Link to={'/registro'}>Registrarse</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to={'/inicio-sesion'}>Iniciar sesión</Link></NavDropdown.Item>
                                </>
                                :
                                <>
                                    <NavDropdown.Item><Link to={'/perfil'}>Mi perfil</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <span className='nav-link' onClick={logout}>Cerrar sesión</span>
                                    </NavDropdown.Item>
                                </>
                        }
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}

export default Navigation
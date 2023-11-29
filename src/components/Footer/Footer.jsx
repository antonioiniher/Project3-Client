import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer>
            <ul className="nav justify-content-center border-top pb-3 mb-3">
                <li className="nav-item"><Link to={'/'} className="nav-link px-2 linksFooter">Home </Link></li>
                <li className="nav-item"><Link to={'/nosotros'} className="nav-link px-2 linksFooter">Nosotros </Link></li>
                <li className="nav-item"><Link to={'/como-funciona'} className="nav-link px-2 linksFooter">Como funciona </Link></li>
                <li className="nav-item"><Link to={'/contacto'} className="nav-link px-2 linksFooter">Contacto </Link></li>
            </ul>
            <p className="text-center linksFooter">© 2023 Proyecto 3</p>
        </footer>
    )
}

export default Footer
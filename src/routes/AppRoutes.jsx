import { Routes, Route } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/registro'} element={<h1>HOLA</h1>} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />
            <Route path={'/perfil'} element={<h1>HOLA</h1>} />
            <Route path={'/perfil/editar'} element={<h1>HOLA</h1>} />
            <Route path={'/clases'} element={<h1>HOLA</h1>} />
            <Route path={'/clase/crear'} element={<h1>HOLA</h1>} />
            <Route path={'/clase/:class_id'} element={<h1>HOLA</h1>} />
            <Route path={'/clase/:class_id/editar'} element={<h1>HOLA</h1>} />
            <Route path={'/nosotros'} element={<h1>HOLA</h1>} />
            <Route path={'/como-funciona'} element={<h1>HOLA</h1>} />
            <Route path={'/contacto'} element={<h1>HOLA</h1>} />

            <Route path={'*'} element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes
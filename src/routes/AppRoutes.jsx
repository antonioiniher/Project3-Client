import { Routes, Route } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewUserPage from '../pages/NewUserPage/NewUserPage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import PrivateRoute from './PrivateRoute'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import TeacherPrivateRoute from './TeacherPrivateRoute'
import ContactPage from '../pages/ContactPage/ContactPage'
import HowItWorksPage from '../pages/HowItWorksPage/HowItWorksPage'
import NewClassPage from '../pages/NewClassPage/NewClassPage'
import ClassesPage from '../pages/ClassesPage/ClassesPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/registro'} element={<NewUserPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />
            <Route path={'/clases'} element={<ClassesPage />} />
            <Route path={'/clase/:class_id'} element={<h1>HOLA</h1>} />
            <Route path={'/clase/:class_id/editar'} element={<h1>HOLA</h1>} />
            <Route path={'/nosotros'} element={<AboutUsPage />} />
            <Route path={'/como-funciona'} element={<HowItWorksPage />} />
            <Route path={'/contacto'} element={<ContactPage />} />

            <Route element={<PrivateRoute />}>
                <Route path={'/perfil'} element={<UserProfilePage />} />
                <Route path={'/perfil/editar'} element={<EditProfilePage />} />
            </Route>

            <Route element={<TeacherPrivateRoute />}>
                <Route path={'/clase/crear'} element={<NewClassPage />} />
            </Route>

            <Route path={'*'} element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes
import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import Loader from "../components/Loader/Loader"
import { AuthContext } from "../contexts/auth.context"

const TeacherPrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (loggedUser.role != 'TEACHER' || loggedUser.role != 'ADMIN') {
        return <Navigate to="/inicio-sesion" />
    }

    return <Outlet />
}

export default TeacherPrivateRoute
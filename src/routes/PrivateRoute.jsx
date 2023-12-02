import { useContext, useEffect } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import Loader from "../components/Loader/Loader"
import { AuthContext } from "../contexts/auth.context"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!loggedUser) {
        return <Navigate to="/inicio-sesion" />
    }

    return <Outlet />
}

export default PrivateRoute
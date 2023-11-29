import { useContext } from "react"
import { Outlet, Navigate, useParams } from "react-router-dom"
import Loader from "../components/Loader/Loader"
import { AuthContext } from "../contexts/auth.context"

const OwnerPrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)
    const { owner_id } = useParams()

    if (isLoading) {
        return <Loader />
    }

    if (loggedUser._id === owner_id || loggedUser.role === 'ADMIN') {
        return <Outlet />
    }

    return <Navigate to="/inicio-sesion" />

}

export default OwnerPrivateRoute
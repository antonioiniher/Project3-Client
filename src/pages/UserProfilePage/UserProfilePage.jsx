import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/User.services"

const UserProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)
    const [user, setUser] = useState(loggedUser)

    useEffect(() => {
        loadUser()
    }, [loggedUser])

    const loadUser = () => {
        if (loggedUser) {
            userService
                .profile(loggedUser._id)
                .then(({ data }) => {
                    setUser(data)
                })
                .catch(err => console.log(err))
        }
    }


    return (
        user && <h1>{user.username}</h1>
    )

}

export default UserProfilePage
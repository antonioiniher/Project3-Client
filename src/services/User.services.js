import axios from "axios"

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    profile(user_id) {
        return this.api.get(`/${user_id}`)
    }

    editUserById(user_id, user) {
        return this.api.put(`/edit/${user_id}`, user)
    }


}

const userService = new UserService()

export default userService
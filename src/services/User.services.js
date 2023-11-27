import axios from "axios"

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })
    }

    profile(user_id) {
        return this.api.get(`/${user_id}`)
    }


}

const userService = new UserService()

export default userService
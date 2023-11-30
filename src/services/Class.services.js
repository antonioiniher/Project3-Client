import axios from "axios";


class ClassServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/class`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    create(classData) {
        return this.api.post("/create", classData)
    }
    getClasses() {
        return this.api.get("/all")
    }

    getClassbySearch(language, classType) {
        return this.api.get('/', {
            params: {
                language, classType
            }
        })
    }

    getOneClass(class_id) {
        return this.api.get(`/${class_id}`)
    }

    putClassRequest(student_id, class_id) {
        return this.api.put(`/putClassRequest/${class_id}`, student_id)
    }
}

const classService = new ClassServices()

export default classService